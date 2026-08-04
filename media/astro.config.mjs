// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://media.consilegy.com',
	trailingSlash: 'always',
	integrations: [
		mdx(),
		sitemap({
			lastmod: new Date(),
			// hreflang は BaseLayout の <link rel="alternate"> で出している。
			// sitemap の i18n オプションは「ロケール接頭辞だけが違うURL」を前提にしており、
			// 日本語 /notes/{slug}/ と英語 /en/articles/{slug}/ のような構造には対応できないため使わない。
			filter: page => !/\.(xml|txt|json)\/?$/.test(new URL(page).pathname),
		}),
	],
});
