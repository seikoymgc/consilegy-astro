// Generate insight eyecatch SVGs (1200x630) in a trustworthy Japanese-B2B style:
// light-gray base, navy typography, 70:25:5 color discipline, generous whitespace,
// no decorative orbs — clean editorial structure with the article title.
// Titles are pulled from each page's articleSchema headline.
// Usage: node scripts/generate-eyecatches.mjs [slug] (no arg = all ja + en)
//
// Palette is centralized in PALETTE below so the whole set can be recolored in one place.

import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const W = 1200;
const H = 630;

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

// Wrap by display width (CJK = 1, ASCII ~ 0.55) without breaking latin words,
// and avoid placing closing punctuation at the start of a line.
function wrapJa(text, perLine) {
	const tokens = text.match(/[A-Za-z0-9]+|./g) ?? [];
	const width = (t) => (/^[A-Za-z0-9]+$/.test(t) ? t.length * 0.55 : /^[ ]$/.test(t) ? 0.3 : 1);
	const noLineStart = /^[、。」』）｝】？！…ー]$/;
	const lines = [];
	let buf = '';
	let w = 0;
	for (const t of tokens) {
		if (w + width(t) > perLine && buf && !noLineStart.test(t)) {
			lines.push(buf);
			buf = '';
			w = 0;
		}
		buf += t;
		w += width(t);
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
	// Pick a font size so the title fits in <=3 lines within the content column
	const steps =
		lang === 'ja'
			? [
					{ size: 64, perLine: 15 },
					{ size: 56, perLine: 17 },
					{ size: 48, perLine: 20 },
				]
			: [
					{ size: 64, perLine: 30 },
					{ size: 56, perLine: 35 },
					{ size: 48, perLine: 41 },
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

function renderSvg({ title, sub, lang }) {
	const P = PALETTE;
	const { size, lines } = layoutTitle(title, lang);
	const lineHeight = Math.round(size * 1.42);

	// Vertically center the title + rule (+ optional subtitle) block.
	const ruleBlock = 24 + 3;             // gap above rule + rule thickness
	const subBlock = sub ? 44 : 0;        // gap + subtitle line
	const blockHeight = lines.length * lineHeight + ruleBlock + subBlock;
	const titleTop = Math.round((H - blockHeight) / 2 + size * 0.55) + 6;

	const titleSpans = lines
		.map((line, i) => `<text x="${MARGIN}" y="${titleTop + i * lineHeight}" font-family="'Hiragino Sans','Hiragino Kaku Gothic ProN',system-ui,sans-serif" font-size="${size}" font-weight="600" fill="${P.navy}" letter-spacing="0.01em">${esc(line)}</text>`)
		.join('\n  ');

	const lastBaseline = titleTop + (lines.length - 1) * lineHeight;
	const ruleY = lastBaseline + 24;
	const rule = `<rect x="${MARGIN}" y="${ruleY}" width="64" height="3" fill="${P.navy}"/>`;

	const subText = sub
		? `<text x="${MARGIN}" y="${ruleY + 3 + 36}" font-family="'Hiragino Sans','Hiragino Kaku Gothic ProN',system-ui,sans-serif" font-size="26" font-weight="400" fill="${P.sub}" letter-spacing="0.02em">${esc(sub.length > (lang === 'ja' ? 38 : 72) ? sub.slice(0, lang === 'ja' ? 37 : 71) + '…' : sub)}</text>`
		: '';

	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${P.bgFrom}"/>
      <stop offset="100%" stop-color="${P.bgTo}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

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
		const svg = renderSvg({ title, sub, lang });
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
