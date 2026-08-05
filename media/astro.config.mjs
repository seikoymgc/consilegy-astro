// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

// sitemap の lastmod をページごとに実データから引く。
// ビルド時刻を全ページに入れると、毎日のビルドで45ページ全部が「今日更新」になり、
// クローラに対して不正確なシグナルを出すことになる。
const ROOT = path.dirname(new URL(import.meta.url).pathname);

function collectDates(dir, urlPrefix) {
	const map = new Map();
	let files = [];
	try {
		files = readdirSync(path.join(ROOT, dir)).filter(f => /\.mdx?$/.test(f));
	} catch {
		return map;
	}
	for (const file of files) {
		const raw = readFileSync(path.join(ROOT, dir, file), 'utf-8');
		const fm = raw.match(/^---\n([\s\S]*?)\n---/);
		if (!fm) continue;
		if (/^draft:\s*true\s*$/m.test(fm[1])) continue;
		const updated = fm[1].match(/^updatedAt:\s*"?([\d-]+)"?/m);
		const published = fm[1].match(/^publishedAt:\s*"?([\d-]+)"?/m);
		const date = (updated ?? published)?.[1];
		if (!date) continue;
		map.set(`${urlPrefix}${file.replace(/\.mdx?$/, '')}/`, new Date(date));
	}
	return map;
}

const articleDates = new Map([
	...collectDates('src/content/notes', '/notes/'),
	...collectDates('src/content/notes-en', '/en/articles/'),
]);

// 一覧・カテゴリ・トップは、載っている記事のうち最も新しい日付を使う
const newest = [...articleDates.values()].sort((a, b) => b - a)[0] ?? new Date();

export default defineConfig({
	site: 'https://media.consilegy.com',
	trailingSlash: 'always',
	integrations: [
		mdx(),
		sitemap({
			// hreflang は BaseLayout の <link rel="alternate"> で出している。
			// sitemap の i18n オプションは「ロケール接頭辞だけが違うURL」を前提にしており、
			// 日本語 /notes/{slug}/ と英語 /en/articles/{slug}/ のような構造には対応できないため使わない。
			filter: page => !/\.(xml|txt|json)\/?$/.test(new URL(page).pathname),
			serialize(item) {
				const pathname = new URL(item.url).pathname;
				const own = articleDates.get(pathname);
				if (own) return { ...item, lastmod: own.toISOString() };
				// 記事一覧・カテゴリ・トップは中身が入れ替わるので最新記事の日付を使う
				if (pathname === '/' || pathname === '/en/' || pathname.startsWith('/notes/')) {
					return { ...item, lastmod: newest.toISOString() };
				}
				// about など、更新日が分からないページには lastmod を付けない
				return item;
			},
		}),
	],
});
