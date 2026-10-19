// OG images (1200x630) for the site default and the Revenue CRM LPs.
// Left column: label, headline (the page's h1, line breaks set by hand), optional sub.
// Right column: the product icon (or the Consilegy mark) on a soft glow. Footer: Consilegy logo + URL.
// Usage: node scripts/generate-og.mjs   → public/images/og/<name>-<SUFFIX>.png
// Change SUFFIX whenever the look changes: Cloudflare keeps serving the old file under the same URL.
import { readFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const ROOT = new URL('..', import.meta.url).pathname;
const OUT = join(ROOT, 'public/images/og');
const SUFFIX = '-2026b';
const W = 1200;
const H = 630;
const M = 88;

const INK = '#0F172A';
const SUB = '#475569';
const QUIET = '#94A3B8';
const JA_FONT = "'Hiragino Sans','Hiragino Kaku Gothic ProN','Noto Sans CJK JP',sans-serif";
const EN_FONT = "'Helvetica Neue',Helvetica,Arial,sans-serif";

const CRM = { icon: 'public/images/crm/logo/revenue-crm-logo-v3-512.png', color: '#0E7490', glow: '#0E7490' };
const SCHOOL = { icon: 'public/images/crm/logo/revenue-crm-school-logo-orange-512.png', color: '#EA580C', glow: '#F97316' };
const BRAND = { mark: 'public/favicon-2026b.svg', color: '#8758C9', glow: '#8758C9' };

const PAGES = [
	{ name: 'default-ja', lang: 'ja', theme: BRAND, label: 'Consilegy合同会社', lines: ['使われていない', '顧客データを、', '売上が動く仕組みへ。'], size: 58, sub: 'CRM・SFA・MAとAIで収益の仕組みを設計し、現場で回るまで伴走します。', subSize: 23, url: 'consilegy.com' },
	{ name: 'default-en', lang: 'en', theme: BRAND, label: 'Consilegy LLC', lines: ['Make Japan revenue', 'execution visible,', 'manageable, and', 'repeatable.'], size: 54, url: 'consilegy.com/en' },
	// crm-ja は 2026-10-19 に文言を変えたので接尾辞を -2026c に（他は -2026b のまま。同名で差し替えると Cloudflare が旧画像を返す）
	{ name: 'crm-ja', suffix: '-2026c', lang: 'ja', theme: CRM, label: 'Revenue CRM', lines: ['AIが代わりに働く。', '入力がめんどくさくない', '顧客管理ツール。'], size: 54, sub: '中小企業向けの顧客管理・営業支援ツール（CRM／SFA）', subSize: 24, url: 'consilegy.com/crm' },
	{ name: 'crm-en', lang: 'en', theme: CRM, label: 'Revenue CRM', lines: ['A CRM for people', "who don't like", 'opening their CRM.'], size: 58, url: 'consilegy.com/en/crm' },
	{ name: 'crm-school-ja', lang: 'ja', theme: SCHOOL, label: 'Revenue CRM スクール版', lines: ['1日を、', '48時間にしよう。'], size: 66, sub: '教室のためのCRM', url: 'consilegy.com/crm/school' },
	{ name: 'crm-school-en', lang: 'en', theme: SCHOOL, label: 'Revenue CRM for schools', lines: ['Make your day', '48 hours long.'], size: 62, url: 'consilegy.com/en/crm/school' },
	{ name: 'crm-contractor-ja', lang: 'ja', theme: CRM, label: 'Revenue CRM 受託開発版', lines: ['見積を出す前に、', '空きが見えている。'], size: 62, url: 'consilegy.com/crm/contractor' },
	{ name: 'crm-contractor-en', lang: 'en', theme: CRM, label: 'Revenue CRM', lines: ['CRM for agencies', 'and contract work.'], size: 60, url: 'consilegy.com/en/crm/contractor' },
	{ name: 'crm-reseller-ja', lang: 'ja', theme: CRM, label: 'Revenue CRM 代理店版', lines: ['次の更新が、', 'いつも先に', '見えている。'], size: 62, url: 'consilegy.com/crm/reseller' },
	{ name: 'crm-reseller-en', lang: 'en', theme: CRM, label: 'Revenue CRM', lines: ['CRM for', 'SaaS resellers.'], size: 62, url: 'consilegy.com/en/crm/reseller' },
];

const esc = (s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

function textSvg(p) {
	const font = p.lang === 'ja' ? JA_FONT : EN_FONT;
	const lh = Math.round(p.size * 1.28);
	const blockH = p.lines.length * lh + (p.sub ? 64 : 0);
	// headline block centred vertically between the label (y≈150) and the footer rule (y=532)
	let y = Math.round(150 + (532 - 150 - blockH) / 2 + p.size * 0.9);
	const head = p.lines
		.map((l, i) => `<text x="${M}" y="${y + i * lh}" font-family="${font}" font-size="${p.size}" font-weight="700" fill="${INK}" letter-spacing="${p.lang === 'ja' ? '0.01em' : '-0.01em'}">${esc(l)}</text>`)
		.join('\n  ');
	const subY = y + (p.lines.length - 1) * lh + 62;
	const sub = p.sub
		? `<text x="${M}" y="${subY}" font-family="${font}" font-size="${p.subSize ?? 28}" font-weight="500" fill="${SUB}">${esc(p.sub)}</text>`
		: '';
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#F1F5F9"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="${p.theme.glow}" stop-opacity="0.18"/><stop offset="1" stop-color="${p.theme.glow}" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="8" fill="${p.theme.color}"/>
  <circle cx="955" cy="300" r="250" fill="url(#glow)"/>
  <rect x="${M}" y="96" width="5" height="34" rx="2" fill="${p.theme.color}"/>
  <text x="${M + 20}" y="124" font-family="${font}" font-size="28" font-weight="700" fill="${p.theme.color}">${esc(p.label)}</text>
  ${head}
  ${sub}
  <line x1="${M}" y1="532" x2="${W - M}" y2="532" stroke="${INK}" stroke-opacity="0.10" stroke-width="2"/>
  <text x="${W - M}" y="584" text-anchor="end" font-family="${EN_FONT}" font-size="24" fill="${QUIET}">${esc(p.url)}</text>
</svg>`;
}

async function markPng(theme, size) {
	if (theme.icon) return sharp(join(ROOT, theme.icon)).resize(size, size).png().toBuffer();
	// Consilegy mark: drop the white background rect of the favicon
	const svg = readFileSync(join(ROOT, theme.mark), 'utf8').replace(/<rect[^>]*fill="white"\/>/, '');
	return sharp(Buffer.from(svg), { density: 300 }).resize(size, size).png().toBuffer();
}

mkdirSync(OUT, { recursive: true });
const logo = await sharp(join(ROOT, 'public/images/common/consilegy-logo-2026b.svg'), { density: 300 }).resize({ height: 34 }).png().toBuffer();
for (const p of PAGES) {
	const size = p.theme.icon ? 248 : 300;
	const mark = await markPng(p.theme, size);
	const file = join(OUT, `${p.name}${p.suffix ?? SUFFIX}.png`);
	await sharp(Buffer.from(textSvg(p)))
		.composite([
			{ input: mark, left: Math.round(955 - size / 2), top: Math.round(300 - size / 2) },
			{ input: logo, left: M, top: 562 },
		])
		.png()
		.toFile(file);
	console.log(`ok: public/images/og/${p.name}${p.suffix ?? SUFFIX}.png`);
}
