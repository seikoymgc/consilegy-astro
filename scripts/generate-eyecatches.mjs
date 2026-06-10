// Generate insight eyecatch SVGs (1200x630) in the site's Swiss x Glass style:
// dark stone base, soft blue/violet orbs, structured typography with the article title.
// Titles are pulled from each page's articleSchema headline.
// Usage: node scripts/generate-eyecatches.mjs [slug] (no arg = all ja + en)

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

function renderSvg({ title, sub, lang }) {
	const { size, lines } = layoutTitle(title, lang);
	const lineHeight = Math.round(size * 1.45);
	const blockHeight = lines.length * lineHeight + (sub ? 56 : 0);
	const titleTop = Math.round((H - blockHeight) / 2 + size * 0.55) + 14;

	const titleSpans = lines
		.map((line, i) => `<text x="84" y="${titleTop + i * lineHeight}" font-family="'Hiragino Sans','Hiragino Kaku Gothic ProN',system-ui,sans-serif" font-size="${size}" font-weight="600" fill="#FAFAF9" letter-spacing="0.01em">${esc(line)}</text>`)
		.join('\n  ');

	const subText = sub
		? `<text x="84" y="${titleTop + lines.length * lineHeight + 18}" font-family="'Hiragino Sans','Hiragino Kaku Gothic ProN',system-ui,sans-serif" font-size="26" font-weight="400" fill="#FAFAF9" fill-opacity="0.55" letter-spacing="0.02em">${esc(sub.length > (lang === 'ja' ? 38 : 72) ? sub.slice(0, lang === 'ja' ? 37 : 71) + '…' : sub)}</text>`
		: '';

	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1C1917"/>
      <stop offset="100%" stop-color="#26222A"/>
    </linearGradient>
    <radialGradient id="orbBlue" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#60A5FA" stop-opacity="0.68"/>
      <stop offset="100%" stop-color="#60A5FA" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="orbViolet" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#A78BFA" stop-opacity="0.58"/>
      <stop offset="100%" stop-color="#A78BFA" stop-opacity="0"/>
    </radialGradient>
    <filter id="soften" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="40"/>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="1090" cy="-20" r="340" fill="url(#orbBlue)" filter="url(#soften)"/>
  <circle cx="40" cy="660" r="300" fill="url(#orbViolet)" filter="url(#soften)"/>
  <circle cx="1150" cy="560" r="200" fill="url(#orbViolet)" filter="url(#soften)" opacity="0.5"/>

  <line x1="84" y1="96" x2="1116" y2="96" stroke="#FAFAF9" stroke-opacity="0.14" stroke-width="1"/>
  <text x="84" y="74" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif" font-size="20" font-weight="500" fill="#93C5FD" letter-spacing="0.28em">INSIGHTS</text>

  ${titleSpans}
  ${subText}

  <rect x="0" y="${H - 86}" width="${W}" height="86" fill="#FAFAF9" fill-opacity="0.045"/>
  <line x1="0" y1="${H - 86}" x2="${W}" y2="${H - 86}" stroke="#FAFAF9" stroke-opacity="0.14" stroke-width="1"/>
  <text x="84" y="${H - 33}" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif" font-size="22" font-weight="600" fill="#FAFAF9" fill-opacity="0.85" letter-spacing="0.18em">CONSILEGY</text>
  <text x="1116" y="${H - 33}" text-anchor="end" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif" font-size="18" font-weight="400" fill="#FAFAF9" fill-opacity="0.4" letter-spacing="0.06em">consilegy.com</text>
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
