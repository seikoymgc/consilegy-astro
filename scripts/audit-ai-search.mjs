// npm run build && npm run audit:ai-search
// 生成物を確認する。本番のWAF設定・インデックス登録・AIの引用状況は別途確認が必要。
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { parse } from 'parse5';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = resolve(root, 'dist');
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const read = (path) => readFileSync(resolve(dist, path), 'utf8');

function elements(node, tag, result = []) {
	if (node.tagName === tag) result.push(Object.fromEntries(node.attrs.map(({ name, value }) => [name, value])));
	for (const child of node.childNodes ?? []) elements(child, tag, result);
	return result;
}

function htmlPath(url) {
	const pathname = decodeURIComponent(new URL(url).pathname);
	return resolve(dist, `.${pathname}`, 'index.html');
}

if (!existsSync(resolve(dist, 'sitemap-index.xml'))) {
	throw new Error('先に npm run build を実行してください。');
}

// サイトマップの各URLが、実在する正規のインデックス対象ページか確認する。
const sitemapFiles = [...read('sitemap-index.xml').matchAll(/<loc>([^<]+)<\/loc>/g)];
let pages = 0;
for (const [, sitemapUrl] of sitemapFiles) {
	const xml = read(new URL(sitemapUrl).pathname.slice(1));
	for (const [, url] of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
		pages++;
		const file = htmlPath(url);
		check(existsSync(file), `サイトマップの参照先が存在しません: ${url}`);
		if (!existsSync(file)) continue;
		const doc = parse(readFileSync(file, 'utf8'));
		const metas = elements(doc, 'meta');
		check(!metas.some(m => /^(robots|googlebot)$/i.test(m.name ?? '') && /noindex/i.test(m.content ?? '')), `noindex がサイトマップに含まれています: ${url}`);
		check(!metas.some(m => /refresh/i.test(m['http-equiv'] ?? '')), `転送ページがサイトマップに含まれています: ${url}`);
		check(elements(doc, 'link').some(l => l.rel === 'canonical' && l.href === url), `canonical がサイトマップと一致しません: ${url}`);
		check(metas.some(m => m.name === 'description' && m.content?.trim()), `description がありません: ${url}`);
	}
}

// 同一サイトの案内リンクにリンク切れがないことを確認する。
const llms = read('llms.txt');
const urls = new Set([...llms.matchAll(/https:\/\/consilegy\.com\/[^\s)>]*/g)].map(m => m[0]));
for (const url of urls) check(existsSync(htmlPath(url)), `llms.txt の参照先が存在しません: ${url}`);

// robots.txt は User-agent ごとの Allow/Disallow を確認する。
const groups = [];
let group;
let hasRules = false;
for (const line of read('robots.txt').split('\n')) {
	const match = line.replace(/#.*/, '').trim().match(/^([\w-]+):\s*(.*)$/);
	if (!match) continue;
	const [, rawKey, value] = match;
	const key = rawKey.toLowerCase();
	if (key === 'user-agent') {
		if (!group || hasRules) { group = { agents: [], rules: [] }; groups.push(group); hasRules = false; }
		group.agents.push(value.toLowerCase());
	} else if (group && (key === 'allow' || key === 'disallow')) {
		group.rules.push({ key, value });
		hasRules = true;
	}
}
for (const bot of ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User']) {
	const specific = groups.filter(g => g.agents.includes(bot.toLowerCase()));
	const applicable = specific.length ? specific : groups.filter(g => g.agents.includes('*'));
	check(applicable.length > 0 && !applicable.some(g => g.rules.some(r => r.key === 'disallow' && r.value)), `${bot} にクロール制限があります`);
}
check(read('robots.txt').includes('Sitemap: https://consilegy.com/sitemap-index.xml'), 'robots.txt の Sitemap がありません');
check(/AddCharset\s+UTF-8\s+\.txt/i.test(read('.htaccess')), 'テキストファイルのUTF-8指定がありません');

if (failures.length) {
	console.error(failures.join('\n'));
	process.exitCode = 1;
} else {
	console.log(`AI検索の公開設定チェック: OK（サイトマップ ${pages}ページ、案内リンク ${urls.size}件、検索クローラー8種）`);
}
