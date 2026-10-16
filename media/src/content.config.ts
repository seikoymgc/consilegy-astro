import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 教育コンテンツ。読者の悩みが主語、記事は解決策。
// 「なぜ壊れるか（洞察）」は本体サイト、「どう直すか（解決）」はここ。
// カテゴリは領域で分け、課題からの入口は categoryQuestions で提供する。
export const categories = {
	crm: 'CRM・SFA',
	sales: '営業・商談管理',
	data: 'データ・KPI',
	'japan-gtm': '日本市場・GTM',
	adoption: '組織・運用定着',
	marketing: 'マーケティング',
} as const;

export const categoryQuestions = {
	crm: 'CRM・SFAが定着しない',
	sales: '商談が進まない・受注が読めない',
	data: '数字が部署ごとに合わない',
	'japan-gtm': '日本市場で成果が出ない',
	adoption: '導入したのに使われない',
	marketing: 'リードが商談につながらない',
} as const;

export type CategoryKey = keyof typeof categories;

// カテゴリ色。CSS生成アイキャッチとカテゴリナビで使う
export const categoryColors: Record<CategoryKey, string> = {
	crm: '#1e40af',
	sales: '#0f6e56',
	data: '#7c5cbf',
	'japan-gtm': '#b45309',
	adoption: '#9d174d',
	marketing: '#0e7490',
};

// 英語版カテゴリ（Japan GTM中心。海外SaaS読者向け）
export const categoriesEn = {
	'japan-gtm': 'Japan market & GTM',
	crm: 'CRM & SFA',
	sales: 'Sales & pipeline',
	data: 'Data & KPIs',
	adoption: 'Organization & adoption',
	marketing: 'Marketing',
} as const;

const notes = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
	schema: z.object({
		title: z.string().max(60),
		description: z.string(),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		category: z.enum(['crm', 'sales', 'data', 'japan-gtm', 'adoption', 'marketing']),
		// この記事の結論。読者が覚えて帰る一文。1本につき1つだけ。
		principle: z.string(),
		// 本文から返す正典へのリンク。実務ノートには必須。
		canonUrl: z.string().url(),
		canonLabel: z.string(),
		draft: z.boolean().optional().default(false),
	}),
});

const notesEn = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes-en' }),
	schema: z.object({
		title: z.string().max(80),
		description: z.string(),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		category: z.enum(['crm', 'sales', 'data', 'japan-gtm', 'adoption', 'marketing']),
		principle: z.string(),
		canonUrl: z.string().url(),
		canonLabel: z.string(),
		draft: z.boolean().optional().default(false),
	}),
});

export const collections = { notes, notesEn };
