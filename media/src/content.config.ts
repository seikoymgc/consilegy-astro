import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 実務ノート。日次で書く一次情報の記録。
// 目安は800〜1,200字。これを超えるなら、それは正典の材料。
export const categories = {
	crm: 'HubSpot・CRM実装',
	sales: '商談プロセス・営業設計',
	data: 'データと計測',
	'japan-gtm': 'Japan GTM',
	adoption: '定着とチェンジマネジメント',
	marketing: 'マーケティングと見込み客の育成',
} as const;

export type CategoryKey = keyof typeof categories;

const notes = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
	schema: z.object({
		title: z.string().max(60),
		description: z.string(),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		category: z.enum(['crm', 'sales', 'data', 'japan-gtm', 'adoption', 'marketing']),
		// 一般化できる原則。1本につき1つだけ。
		principle: z.string(),
		// 本文から返す正典へのリンク。実務ノートには必須。
		canonUrl: z.string().url(),
		canonLabel: z.string(),
		draft: z.boolean().optional().default(false),
	}),
});

export const collections = { notes };
