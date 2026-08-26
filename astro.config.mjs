// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://consilegy.com',
	trailingSlash: 'always',
	// 旧WPのGA4診断3ページ。本文がショートコード文字列のまま公開されていたため
	// 削除し、生きている収益診断へ送る（被リンク・検索流入を404で捨てないため）。
	redirects: {
		'/ga4-utilization-check/': '/diagnostic/',
		'/en/ga4-utilization-assessment/': '/en/diagnostic/',
		'/en/ga4-utilization-checklist/': '/en/diagnostic/',
	},
	integrations: [
		mdx(),
		sitemap({
			lastmod: new Date(),
		}),
	],
});
