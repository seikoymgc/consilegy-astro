// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import explainTerms from './src/integrations/explain-terms.mjs';

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
			// 更新日が分からないページにビルド日を付けない。
			// noindex の旧記事・診断フォームと転送先のあるURLも検索への案内から外す。
			filter: (page) => {
				const { pathname } = new URL(page);
				return !/^\/(marketing|marketing-strategy|project-management|my-opinion|others)(\/|$)/.test(pathname)
					&& !/^\/(en\/)?diagnostic\/start\/$/.test(pathname)
					&& !/^\/crm\/referral\/kit\/$/.test(pathname)
					&& !/^\/(en\/)?ga4-utilization-(check|assessment|checklist)\/$/.test(pathname);
			},
		}),
		// 日本語ページの CRM・SFA・MA に、最初の1回だけ説明を添える（ビルド後のHTMLに対して）。
		explainTerms(),
	],
});
