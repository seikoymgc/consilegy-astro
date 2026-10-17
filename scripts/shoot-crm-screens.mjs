// Revenue CRM の画面画像を、本番の公開デモから撮り直す。デザインを変えたら1回流す。
//
//   node scripts/shoot-crm-screens.mjs <suffix>        例: node scripts/shoot-crm-screens.mjs 2026-11
//
// - 公開デモ（demo / demo-en / demo-zh / demo-contractor / demo-reseller）に1回ずつ入り、見るだけで撮る。
//   保存・ONにするボタンは押さない（自動化の診断の回答は画面の中だけで、書き込みはない）。
// - デモに入るたびに歓迎メールが EMAIL に届き、demo_leads に1行入る（5回）。
// - 書き出し先は別名（<名前>-<suffix>）。Cloudflare は同じURLの旧画像を返し続けるため、上書きしない。
// - サイト（src/）の参照は、このスクリプトが新しい別名に付け替える。alt に数字や商談名を書いている画像は、
//   デモの日付が毎朝進む（crm #307）ので、撮った画面と alt を必ず照らし合わせる。
// - 最後に、サイトの外で手で行う手順（資料・Googleスライド・CRMのデモ一覧・ステップメール）を表示する。
//
// 撮る前に、CRM の最新の変更が本番（Vercel）に出ていることを確かめる。
import { chromium } from 'playwright-core';
import sharp from 'sharp';
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SUFFIX = process.argv[2];
if (!SUFFIX || !/^[0-9a-z-]+$/.test(SUFFIX)) {
	console.error('usage: node scripts/shoot-crm-screens.mjs <suffix>  (例: 2026-11)');
	process.exit(1);
}
const ROOT = new URL('..', import.meta.url).pathname;
const RAW = join(ROOT, '.crm-shots', SUFFIX);
mkdirSync(RAW, { recursive: true });

const BASE = 'https://crm.consilegy.com';
const EMAIL = process.env.DEMO_EMAIL ?? 'consilegy@gmail.com';
const CACHED = `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1234/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;
const EXE = process.env.CHROME_PATH ?? (existsSync(CACHED) ? CACHED : undefined);

// 先方待ちの記事で使う商談（demo 組織の「サンプルフィナンシャル 追加ライセンス」）
const WAITING_DEAL = 'a2f532f1-de72-4903-b62a-0152bd800e17';

const LP = [1920, 1200], MOB = [390, 844], DECK = [1440, 834], THUMB = [1440, 900], JG = [1451, 780], ED = [1790, 1050], ART = [1456, 822], MAIL = [1440, 1000];

// name, viewport, path, options: clip = 'thumb' | [目印の文字, 高さ] ; act = 画面操作
const JOBS = {
	demo: [
		['lp-dash', LP, '/dashboard'],
		['m-dash', MOB, '/dashboard'], ['m-deals', MOB, '/deals'],
		['deck-automations', DECK, '/automations'], ['deck-agent', DECK, '/agent'], ['deck-deals', DECK, '/deals'], ['deck-dashboard', DECK, '/dashboard'],
		['thumb-demo', THUMB, '/deals', { clip: 'thumb' }],
		['jg-dashboard', JG, '/dashboard'], ['jg-deals', JG, '/deals'], ['jg-automations', JG, '/automations'],
		['art-business-cards-1', ART, ''],
		['art-business-cards-2', [1456, 430], '/contacts/scan'],
		['art-waiting-1', ART, `/deals/${WAITING_DEAL}`],
		['art-waiting-2', ART, `/deals/${WAITING_DEAL}/edit`, { act: async (p) => {
			await p.getByText('先方待ち・意思決定').first().scrollIntoViewIfNeeded({ timeout: 10000 });
			await p.mouse.wheel(0, -60);
		} }],
		['art-waiting-3', ART, '/pipeline-review?days=30'],
		['art-automations-1', ART, '/automations'],
		['art-automations-2', ART, '/automations', { act: async (p) => {
			await p.getByText('どれをONにするか診断する').first().click();
		} }],
		['art-automations-3', ART, '/automations', { act: async (p) => {
			await p.getByText('どれをONにするか診断する').first().click();
			await p.waitForTimeout(800);
			for (const t of ['問い合わせフォーム', '10件以下', '1〜2回で決まる', '継続課金・更新がある']) {
				await p.getByRole('button', { name: t, exact: true }).first().click();
				await p.waitForTimeout(300);
			}
			await p.getByText('まずこの').first().scrollIntoViewIfNeeded({ timeout: 10000 });
			await p.mouse.wheel(0, -200);
		} }],
		['mail-dashboard', MAIL, '/dashboard', { clip: ['パイプライン総額', 508] }],
		['mail-automations', MAIL, '/automations', { clip: [null, 480] }],
	],
	'demo-en': [
		['lp-dash-en', LP, '/dashboard'],
		['m-dash-en', MOB, '/dashboard'], ['m-contacts-en', MOB, '/contacts'],
		['thumb-demo-en', THUMB, '/deals', { clip: 'thumb' }],
		['jg-dashboard-en', JG, '/dashboard'],
		['mail-dashboard-en', MAIL, '/dashboard', { clip: ['Open pipeline', 560] }],
		['mail-automations-en', MAIL, '/automations', { clip: [null, 414] }],
	],
	'demo-zh': [['thumb-demo-zh', THUMB, '/deals', { clip: 'thumb' }]],
	'demo-contractor': [
		['c-deals', ED, '/deals'], ['c-delivery', ED, '/delivery'], ['c-quotes', ED, '/quotes'], ['c-resources', ED, '/resources'],
		['thumb-demo-contractor', THUMB, '/delivery', { clip: 'thumb' }],
	],
	'demo-reseller': [
		['r-automations', ED, '/automations'], ['r-deals', ED, '/deals'], ['r-subscriptions', ED, '/subscriptions'],
		['thumb-demo-reseller', THUMB, '/subscriptions', { clip: 'thumb' }],
	],
};

async function go(page, url, opts) {
	for (let i = 0; i < 4; i++) {
		try { return await page.goto(url, { timeout: 45000, ...opts }); }
		catch (e) { if (i === 3) throw e; await new Promise((r) => setTimeout(r, 5000)); }
	}
}

async function clipFor(page, clip) {
	const main = await page.locator('main').first().boundingBox();
	if (clip === 'thumb') return { x: main.x, y: main.y, width: 960, height: 480 };
	const [fromText, height] = clip;
	let y = main.y + 8;
	if (fromText) {
		const el = page.getByText(fromText).first();
		await el.scrollIntoViewIfNeeded();
		y = Math.max(0, (await el.boundingBox()).y - 24);
	}
	return { x: main.x + 8, y, width: Math.min(1100, main.width - 16), height };
}

// ---- 1. 撮る -------------------------------------------------------------
const browser = await chromium.launch(EXE ? { executablePath: EXE } : { channel: 'chrome' });
const failed = [];
for (const [slug, jobs] of Object.entries(JOBS)) {
	const locale = slug.endsWith('-en') ? 'en-US' : slug.endsWith('-zh') ? 'zh-TW' : 'ja-JP';
	const login = await browser.newContext({ locale });
	const lp = await login.newPage();
	await go(lp, `${BASE}/demos`, { waitUntil: 'domcontentloaded' });
	const res = await lp.evaluate(async ({ slug, email }) => {
		const r = await fetch('/api/auth/demo', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slug, next: `/go/${slug}`, email }) });
		return { status: r.status, body: await r.json().catch(() => null) };
	}, { slug, email: EMAIL });
	if (res.status !== 200) throw new Error(`demo login failed: ${slug} ${res.status}`);
	await go(lp, `${BASE}${res.body?.next ?? `/go/${slug}`}`, { waitUntil: 'domcontentloaded' });
	const state = await login.storageState();
	await login.close();
	console.log(`${slug}: login`);
	for (const [name, [w, h], path, opt = {}] of jobs) {
		const mobile = w < 600;
		const ctx = await browser.newContext({ storageState: state, locale, viewport: { width: w, height: h }, deviceScaleFactor: mobile ? 3 : 2, isMobile: mobile, hasTouch: mobile });
		const page = await ctx.newPage();
		try {
			await go(page, `${BASE}/w/${slug}${path}`, { waitUntil: 'networkidle' });
			await page.waitForTimeout(2500);
			if (opt.act) await opt.act(page);
			await page.waitForTimeout(600);
			await page.screenshot({ path: join(RAW, `${name}.png`), ...(opt.clip ? { clip: await clipFor(page, opt.clip) } : {}) });
			console.log(`  shot ${name}`);
		} catch (e) {
			failed.push(name);
			console.log(`  FAIL ${name}: ${e.message.split('\n')[0]}`);
		}
		await ctx.close();
	}
}
await browser.close();
if (failed.length) {
	console.error(`\n撮れなかった画面があります: ${failed.join(', ')}。直してから流し直してください（書き出しはしていません）。`);
	process.exit(1);
}

// ---- 2. 書き出す ---------------------------------------------------------
const raw = (n) => join(RAW, `${n}.png`);
const P = (p) => join(ROOT, p);
const webp = (n, d, w, h) => sharp(raw(n)).resize(w, h).webp({ quality: 86 }).toFile(P(d));
const jpg = (n, d, w, h) => sharp(raw(n)).resize(w, h).jpeg({ quality: 88, mozjpeg: true }).toFile(P(d));
const S = SUFFIX;
const written = [];
const out = async (p, fn) => { await fn(); written.push(p); };

for (const [n, d] of [['lp-dash', `screen-dashboard-${S}.webp`], ['lp-dash-en', `screen-dashboard-${S}-en.webp`]]) await out(`public/images/crm/${d}`, () => webp(n, `public/images/crm/${d}`, 2000, 1250));
for (const [n, d] of [['m-dash', `screen-mobile-dashboard-${S}.webp`], ['m-deals', `screen-mobile-deals-${S}.webp`], ['m-dash-en', `screen-mobile-dashboard-${S}-en.webp`], ['m-contacts-en', `screen-mobile-contacts-${S}-en.webp`]]) await out(`public/images/crm/${d}`, () => webp(n, `public/images/crm/${d}`, 780, 1688));
for (const n of ['deals', 'delivery', 'quotes', 'resources']) await out(`public/images/crm/contractor/screen-${n}-${S}.webp`, () => webp(`c-${n}`, `public/images/crm/contractor/screen-${n}-${S}.webp`, 1790, 1050));
for (const n of ['automations', 'deals', 'subscriptions']) await out(`public/images/crm/reseller/screen-${n}-${S}.webp`, () => webp(`r-${n}`, `public/images/crm/reseller/screen-${n}-${S}.webp`, 1790, 1050));
for (const n of ['automations', 'agent', 'deals', 'dashboard']) await out(`public/images/brand/deck/deck-${n}-${S}.jpg`, () => jpg(`deck-${n}`, `public/images/brand/deck/deck-${n}-${S}.jpg`, 2300, 1332));
await out(`public/images/brand/deck/deck-mobile-dashboard-${S}.jpg`, () => jpg('m-dash', `public/images/brand/deck/deck-mobile-dashboard-${S}.jpg`, 780, 1688));
await out(`public/images/brand/deck/deck-mobile-deals-${S}.jpg`, () => jpg('m-deals', `public/images/brand/deck/deck-mobile-deals-${S}.jpg`, 780, 1688));
const ART_MAP = {
	'business-cards-stay-in-the-drawer-1': ['art-business-cards-1', 822], 'business-cards-stay-in-the-drawer-2': ['art-business-cards-2', 430],
	'waiting-on-the-customer-for-three-months-1': ['art-waiting-1', 822], 'waiting-on-the-customer-for-three-months-2': ['art-waiting-2', 822], 'waiting-on-the-customer-for-three-months-3': ['art-waiting-3', 822],
	'which-automations-to-turn-on-first-1': ['art-automations-1', 822], 'which-automations-to-turn-on-first-2': ['art-automations-2', 822], 'which-automations-to-turn-on-first-3': ['art-automations-3', 822],
};
for (const [d, [n, h]] of Object.entries(ART_MAP)) await out(`public/images/crm/media/screens/${d}-${S}.webp`, () => webp(n, `public/images/crm/media/screens/${d}-${S}.webp`, 1456, h));
for (const [n, d] of [['mail-dashboard', 'demo-dashboard'], ['mail-automations', 'demo-automations'], ['mail-dashboard-en', 'demo-dashboard-en'], ['mail-automations-en', 'demo-automations-en']]) {
	await out(`public/images/crm/email/${d}-${S}.jpg`, () => sharp(raw(n)).resize({ width: 1120 }).jpeg({ quality: 86, mozjpeg: true }).toFile(P(`public/images/crm/email/${d}-${S}.jpg`)));
}
// J-GoodTech の掲載用（台紙 1240×1024 の中央に枠つきで置く）
const J = 'docs/listing-assets/jgoodtech/';
if (existsSync(P(J))) {
	for (const [n, d] of [['jg-dashboard', '03-screen-dashboard.png'], ['jg-deals', '04-screen-deals.png'], ['jg-automations', '05-screen-automations.png'], ['jg-dashboard-en', 'en-03-screen-dashboard.png']]) {
		const shot = await sharp(raw(n)).resize(1160, 624).toBuffer();
		const framed = await sharp({ create: { width: 1162, height: 626, channels: 3, background: { r: 226, g: 232, b: 240 } } }).composite([{ input: shot, left: 1, top: 1 }]).png().toBuffer();
		await out(J + d, () => sharp({ create: { width: 1240, height: 1024, channels: 3, background: { r: 241, g: 245, b: 249 } } }).composite([{ input: framed, left: 39, top: 199 }]).png().toFile(P(J + d)));
	}
}
// CRM の /demos カード（crm リポジトリの public/demos に置く）
for (const s of ['demo', 'demo-en', 'demo-zh', 'demo-contractor', 'demo-reseller']) {
	await sharp(raw(`thumb-${s}`)).resize(960, 480).jpeg({ quality: 86, mozjpeg: true }).toFile(join(RAW, `${s}-${S}.jpg`));
}

// ---- 3. サイトの参照を付け替える ------------------------------------------
const SUF = '-20\\d\\d-\\d\\d[a-z]?';
const RULES = [
	[new RegExp(`(screen-(?:dashboard|mobile-[a-z]+))(?:${SUF})(-en)?\\.webp`, 'g'), (_, a, en) => `${a}-${S}${en ?? ''}.webp`],
	[new RegExp(`((?:contractor|reseller)/screen-(?:[a-z]+|\\$\\{s\\.src\\}))(?:${SUF})?\\.webp`, 'g'), (_, a) => `${a}-${S}.webp`],
	[new RegExp(`(/images/crm/media/screens/[a-z-]+-\\d)(?:${SUF})?\\.webp`, 'g'), (_, a) => `${a}-${S}.webp`],
];
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const edited = [];
for (const f of walk(P('src')).filter((f) => /\.(astro|ts|md|mdx)$/.test(f))) {
	const src = readFileSync(f, 'utf8');
	let next = src;
	for (const [re, fn] of RULES) next = next.replace(re, fn);
	if (next !== src) { writeFileSync(f, next); edited.push(f.replace(ROOT, '')); }
}

console.log(`\n書き出し ${written.length} 件、参照を付け替えたファイル ${edited.length} 件。`);
console.log(edited.map((f) => `  ${f}`).join('\n'));
console.log(`
次に手で行うこと:
 1. 撮った画面と alt を照らし合わせる（数字・商談名・件数）。生の画像: ${RAW}
 2. npm run build → コミット → push（main への push で本番に出る）
 3. 法人版の紹介資料: デスクトップの pptx の ppt/media/image9（自動化）・image7（AI）・image5（商談）・image8（ダッシュボード）・image2/4（スマホ）を
    public/images/brand/deck/deck-*-${S}.jpg に差し替え → 日本語フォント設定つきで PDF に書き出し → public/downloads に別名で置き、.htaccess の転送先を切り替え
 4. Google スライド（法人版 17p-0lQJ3CyHfwbkKXhrmtsU5PgH6jkHWs3i0GdfPvTI）: 2 の push 後に replaceImage で https://consilegy.com/images/brand/deck/deck-*-${S}.jpg へ
 5. CRM の /demos カード: ${RAW}/demo*-${S}.jpg を crm の public/demos に置き、demos-client.tsx の接尾辞を ${S} にして PR（スクール版3枚は名前だけ変える）
 6. ステップメール（デモ体験者フォロー／Demo follow-up (EN)）: sequence_steps の本文の画像URLを public/images/crm/email/*-${S}.jpg に置き換える（本番DBの書き換え。承認を取る）
 7. J-GoodTech: 掲載済みなら先方の画面で上げ直す`);
