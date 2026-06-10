// Generate insight eyecatch SVGs (1200x630) in a trustworthy Japanese-B2B style:
// light-gray base, navy typography, 70:25:5 color discipline, generous whitespace.
// Title sits in the left column; the right column carries a brand visual that
// encodes Consilegy's core idea — connecting the revenue process. Two motifs,
// routed by article theme:
//   - funnel : pipeline / conversion / forecast themes (analytical)
//   - network: everything else — a node/edge graph seeded per slug, so every
//              article gets a distinct figure.
// Titles are pulled from each page's articleSchema headline.
// Usage: node scripts/generate-eyecatches.mjs [slug] (no arg = all ja + en)
//
// Palette is centralized in PALETTE below so the whole set can be recolored in one place.

import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { loadDefaultJapaneseParser } from 'budoux';

const ROOT = new URL('..', import.meta.url).pathname;
const W = 1200;
const H = 630;
const jaParser = loadDefaultJapaneseParser();

function esc(s) {
	return s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function extractHeadline(pagePath) {
	const src = readFileSync(pagePath, 'utf8');
	const m = src.match(/headline:\s*'((?:[^'\\]|\\.)*)'/);
	return m ? m[1].replaceAll("\\'", "'") : null;
}

// Split "main｜sub" style headlines into title + subtitle
function splitHeadline(headline) {
	const m = headline.match(/^(.*?)(?:｜|——|\s\|\s)(.*)$/);
	return m ? { title: m[1].trim(), sub: m[2].trim() } : { title: headline.trim(), sub: '' };
}

// Display width of one token (latin run ~0.55/char, CJK = 1).
const tokenWidth = (t) => (/^[A-Za-z0-9]+$/.test(t) ? t.length * 0.55 : 1);
const phraseWidth = (p) => (p.match(/[A-Za-z0-9]+|./g) ?? []).reduce((w, t) => w + tokenWidth(t), 0);

// Wrap Japanese at natural phrase boundaries (BudouX) so words like 売上 / 本当 /
// 理由 are never split across lines. Phrases are greedy-packed by display width;
// a phrase wider than a whole line falls back to a character break (rare).
function wrapJa(text, perLine) {
	const phrases = jaParser.parse(text);
	const lines = [];
	let buf = '';
	let w = 0;
	for (const ph of phrases) {
		const pw = phraseWidth(ph);
		if (w > 0 && w + pw > perLine) {
			lines.push(buf);
			buf = '';
			w = 0;
		}
		if (pw > perLine && w === 0) {
			// Single phrase longer than a line: hard-break by character.
			for (const t of ph.match(/[A-Za-z0-9]+|./g) ?? []) {
				const tw = tokenWidth(t);
				if (w > 0 && w + tw > perLine) { lines.push(buf); buf = ''; w = 0; }
				buf += t;
				w += tw;
			}
		} else {
			buf += ph;
			w += pw;
		}
	}
	if (buf) lines.push(buf);
	return lines;
}

function wrapEn(text, perLine) {
	const lines = [];
	let buf = '';
	for (const word of text.split(/\s+/)) {
		const next = buf ? `${buf} ${word}` : word;
		if (next.length > perLine && buf) {
			lines.push(buf);
			buf = word;
		} else {
			buf = next;
		}
	}
	if (buf) lines.push(buf);
	return lines;
}

function layoutTitle(title, lang) {
	// Pick a font size so the title fits in <=3 lines within the LEFT column only
	// (the right ~40% is reserved for the brand motif), so type and figure never collide.
	const steps =
		lang === 'ja'
			? [
					{ size: 54, perLine: 9 },
					{ size: 48, perLine: 10 },
					{ size: 42, perLine: 12 },
				]
			: [
					{ size: 54, perLine: 17 },
					{ size: 46, perLine: 20 },
					{ size: 40, perLine: 24 },
				];
	const wrap = lang === 'ja' ? wrapJa : wrapEn;
	for (const step of steps) {
		const lines = wrap(title, step.perLine);
		if (lines.length <= 3) return { ...step, lines };
	}
	const last = steps.at(-1);
	return { ...last, lines: wrap(title, last.perLine).slice(0, 3) };
}

// Centralized palette — light-gray base × navy, max 4 colors (70:25:5 discipline).
const PALETTE = {
	bgFrom: '#F5F7FA', // base (70%): near-white cool gray, top-left
	bgTo: '#E8ECF2',   // base: slightly deeper gray, bottom-right (subtle depth)
	navy: '#1E3A8A',   // main (25%): title, eyebrow bar, rule, brand
	sub: '#64748B',    // subtitle: slate, readable but recessive
	url: '#94A3B8',    // footer url: quiet
	hairline: '#1E3A8A', // structural lines, used at low opacity
};

const MARGIN = 96;          // left/right safe margin (info kept off the edges)
const RIGHT = W - MARGIN;   // right anchor for end-aligned text

// Deterministic RNG seeded from the slug, so each article's figure is stable
// across rebuilds yet distinct from its neighbours.
function makeRng(str) {
	let h = 2166136261;
	for (const c of str) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); }
	return () => {
		h += 0x6d2b79f5; let t = h;
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

// Route a slug/title to a motif. Funnel for pipeline/conversion/forecast themes;
// network (the generative default) for everything else.
const FUNNEL_RE = /(funnel|pipeline|forecast|win[-\s]?rate|conversion|hand[-\s]?off|lead[-\s]?to[-\s]?revenue|mql|sql|商談|受注|売上予測|予測|パイプライン|商談化|フォーキャスト|ファネル)/i;
function pickMotif(slug, title) {
	return FUNNEL_RE.test(slug) || FUNNEL_RE.test(title) ? 'funnel' : 'network';
}

// Right-column region shared by both motifs.
const MOTIF = { x0: 712, x1: 1128, y0: 150, y1: 470, cx: 920, cy: 310 };

// Motif 1 — revenue flow network: columns of nodes (pinched at the ends) wired
// left→right, so it reads as a connected pipeline. Seeded per slug.
function motifNetwork(rng) {
	const { x0, x1, y0, y1 } = MOTIF;
	const cols = 4;
	const nodes = [];
	for (let c = 0; c < cols; c++) {
		const n = c === 0 || c === cols - 1 ? 1 : 2; // pinch the ends → flow shape
		const col = [];
		for (let i = 0; i < n; i++) {
			const gx = x0 + (x1 - x0) * (c / (cols - 1));
			const gy = y0 + (y1 - y0) * ((i + 0.5) / n) + (rng() - 0.5) * 40;
			col.push({ x: gx + (rng() - 0.5) * 26, y: gy, accent: rng() > 0.6 });
		}
		nodes.push(col);
	}
	let edges = '';
	for (let c = 0; c < cols - 1; c++)
		for (const a of nodes[c]) for (const b of nodes[c + 1])
			edges += `<line x1="${a.x.toFixed(0)}" y1="${a.y.toFixed(0)}" x2="${b.x.toFixed(0)}" y2="${b.y.toFixed(0)}" stroke="${PALETTE.navy}" stroke-opacity="${(0.18 + rng() * 0.22).toFixed(2)}" stroke-width="1.5"/>\n  `;
	let dots = '';
	for (const col of nodes) for (const nd of col)
		dots += nd.accent
			? `<circle cx="${nd.x.toFixed(0)}" cy="${nd.y.toFixed(0)}" r="9" fill="url(#bi)"/>\n  `
			: `<circle cx="${nd.x.toFixed(0)}" cy="${nd.y.toFixed(0)}" r="6.5" fill="${PALETTE.bgFrom}" stroke="${PALETTE.navy}" stroke-width="2"/>\n  `;
	return `<circle cx="${MOTIF.cx + 50}" cy="${MOTIF.cy}" r="240" fill="url(#glow)" filter="url(#soft)"/>\n  ${edges}${dots}`;
}

// Motif 2 — conversion funnel: descending bars with tapered side guides.
// Bar widths/opacities jitter per slug so funnel articles aren't identical.
function motifFunnel(rng) {
	const cx = MOTIF.cx, top = 168, bh = 50, gap = 20;
	const base = [320, 250, 184, 120];
	let bars = '', prev = null;
	base.forEach((bw0, i) => {
		const bw = bw0 + (rng() - 0.5) * 36;
		const y = top + i * (bh + gap);
		const op = (0.34 + i * 0.18).toFixed(2);
		bars += `<rect x="${(cx - bw / 2).toFixed(0)}" y="${y}" width="${bw.toFixed(0)}" height="${bh}" rx="6" fill="url(#bi)" fill-opacity="${op}"/>\n  `;
		if (prev) {
			bars += `<line x1="${(cx - prev.bw / 2).toFixed(0)}" y1="${prev.y + bh}" x2="${(cx - bw / 2).toFixed(0)}" y2="${y}" stroke="${PALETTE.navy}" stroke-opacity="0.18" stroke-width="1.5"/>\n  `;
			bars += `<line x1="${(cx + prev.bw / 2).toFixed(0)}" y1="${prev.y + bh}" x2="${(cx + bw / 2).toFixed(0)}" y2="${y}" stroke="${PALETTE.navy}" stroke-opacity="0.18" stroke-width="1.5"/>\n  `;
		}
		prev = { bw, y };
	});
	return `<circle cx="${cx}" cy="330" r="230" fill="url(#glow)" filter="url(#soft)"/>\n  ${bars}`;
}

function renderSvg({ title, sub, lang, slug }) {
	const P = PALETTE;
	const { size, lines } = layoutTitle(title, lang);
	const lineHeight = Math.round(size * 1.42);

	// Vertically center the title + rule (+ optional subtitle) block.
	const ruleBlock = 24 + 3;             // gap above rule + rule thickness
	const subBlock = sub ? 42 : 0;        // gap + subtitle line
	const blockHeight = lines.length * lineHeight + ruleBlock + subBlock;
	const titleTop = Math.round((H - blockHeight) / 2 + size * 0.55) + 6;

	const titleSpans = lines
		.map((line, i) => `<text x="${MARGIN}" y="${titleTop + i * lineHeight}" font-family="'Hiragino Sans','Hiragino Kaku Gothic ProN',system-ui,sans-serif" font-size="${size}" font-weight="600" fill="${P.navy}" letter-spacing="0.01em">${esc(line)}</text>`)
		.join('\n  ');

	const lastBaseline = titleTop + (lines.length - 1) * lineHeight;
	const ruleY = lastBaseline + 24;
	const rule = `<rect x="${MARGIN}" y="${ruleY}" width="64" height="3" fill="${P.navy}"/>`;

	// Subtitle is kept short and clamped to the left column width.
	const subText = sub
		? `<text x="${MARGIN}" y="${ruleY + 3 + 34}" font-family="'Hiragino Sans','Hiragino Kaku Gothic ProN',system-ui,sans-serif" font-size="22" font-weight="400" fill="${P.sub}" letter-spacing="0.02em">${esc(sub.length > (lang === 'ja' ? 26 : 50) ? sub.slice(0, lang === 'ja' ? 25 : 49) + '…' : sub)}</text>`
		: '';

	const rng = makeRng(slug || title);
	const motif = pickMotif(slug || '', title) === 'funnel' ? motifFunnel(rng) : motifNetwork(rng);

	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${P.bgFrom}"/>
      <stop offset="100%" stop-color="${P.bgTo}"/>
    </linearGradient>
    <linearGradient id="bi" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#4F46E5"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#4F46E5" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="#4F46E5" stop-opacity="0"/>
    </radialGradient>
    <filter id="soft" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="26"/></filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  ${motif}

  <rect x="${MARGIN}" y="60" width="4" height="30" fill="${P.navy}"/>
  <text x="${MARGIN + 20}" y="82" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif" font-size="20" font-weight="600" fill="${P.navy}" letter-spacing="0.28em">INSIGHTS</text>
  <line x1="${MARGIN}" y1="116" x2="${RIGHT}" y2="116" stroke="${P.hairline}" stroke-opacity="0.12" stroke-width="1"/>

  ${titleSpans}
  ${rule}
  ${subText}

  <rect x="0" y="${H - 84}" width="${W}" height="84" fill="${P.navy}" fill-opacity="0.035"/>
  <line x1="0" y1="${H - 84}" x2="${W}" y2="${H - 84}" stroke="${P.hairline}" stroke-opacity="0.12" stroke-width="1"/>
  <text x="${MARGIN}" y="${H - 32}" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif" font-size="22" font-weight="600" fill="${P.navy}" letter-spacing="0.18em">CONSILEGY</text>
  <text x="${RIGHT}" y="${H - 32}" text-anchor="end" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif" font-size="18" font-weight="400" fill="${P.url}" letter-spacing="0.06em">consilegy.com</text>
</svg>
`;
}

function generate(dirRel, outRel, lang, onlySlug) {
	const dir = join(ROOT, dirRel);
	if (!existsSync(dir)) return 0;
	let count = 0;
	for (const slug of readdirSync(dir)) {
		if (onlySlug && slug !== onlySlug) continue;
		const page = join(dir, slug, 'index.astro');
		if (!existsSync(page)) continue;
		const headline = extractHeadline(page);
		if (!headline) {
			console.warn(`skip (no headline): ${slug}`);
			continue;
		}
		const { title, sub } = splitHeadline(headline);
		const svg = renderSvg({ title, sub, lang, slug });
		writeFileSync(join(ROOT, outRel, `${slug}.svg`), svg);
		console.log(`ok: ${outRel}/${slug}.svg`);
		count++;
	}
	return count;
}

const onlySlug = process.argv[2];
const ja = generate('src/pages/insights', 'public/images/insights', 'ja', onlySlug);
const en = generate('src/pages/en/insights', 'public/images/insights/en', 'en', onlySlug);
console.log(`generated: ${ja} ja + ${en} en`);
