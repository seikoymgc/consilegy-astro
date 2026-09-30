
import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

export const collections = {

  pages: defineCollection({

    loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),

    schema: z.object({

      wpId: z.number().optional(),

      title: z.string(),

      slug: z.string().optional().default(''),

      sourceUrl: z.string().optional().default(''),

      status: z.string().optional().default(''),

      modified: z.string().optional().default(''),

      description: z.string().optional().default(''),

      featuredImage: z.string().optional().default(''),

      featuredImageAlt: z.string().optional().default(''),

      draft: z.boolean().optional().default(false),

    }),

  }),

  services: defineCollection({

    loader: glob({ pattern: '**/*.md', base: './src/content/services' }),

    schema: z.object({

      title: z.string(),

      slug: z.string(),

      description: z.string(),

      target: z.string().optional().default(''),

      lead: z.string().optional().default(''),

      order: z.number().optional().default(999),

      ctaText: z.string().optional().default('相談する'),

      ctaHref: z.string().optional().default('/contact/'),

      lang: z.enum(['ja', 'en']).optional().default('ja'),

      sourceUrl: z.string().optional().default(''),

    }),

  }),

  caseStudies: defineCollection({

    loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),

    schema: z.object({

      title: z.string(),

      slug: z.string().optional().default(''),

      description: z.string().optional().default(''),

      industry: z.string().optional().default(''),

      service: z.string().optional().default(''),

      // 症状 → 打ち手 → 結果 の3段フォーマット（トップページと同じ語彙で書く）
      size: z.string().optional().default(''),

      symptom: z.string().optional().default(''),

      action: z.string().optional().default(''),

      result: z.string().optional().default(''),

      featuredImage: z.string().optional().default(''),

      featuredImageAlt: z.string().optional().default(''),

      alt: z.string().optional().default(''),

      lang: z.enum(['ja','en']).optional().default('ja'),

      translationKey: z.string().optional().default(''),

      wpId: z.number().optional(),

      sourceUrl: z.string().optional().default(''),

      modified: z.string().optional().default(''),

      draft: z.boolean().optional().default(false),

    }),

  }),

  // Revenue CRM 使い方メディア（/crm/media/ と /en/crm/media/）。
  // 現場の困りごと1つ → Revenue CRM のどの画面で消えるか、を1本にする。
  // 日英で同じ slug を使うので、id はディレクトリ込み（ja/<slug>）にする。
  // 原稿の決め事・型・予定表は crm リポジトリの docs/media/README.md。
  crmMedia: defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: './src/content/crm-media',
      generateId: ({ entry }) => entry.replace(/\.md$/, ''),
    }),
    schema: z.object({
      title: z.string(),
      slug: z.string(),
      lang: z.enum(['ja', 'en']),
      // input=入力する仕事 / setup=設定する仕事 / operate=運用を回す仕事
      category: z.enum(['input', 'setup', 'operate']),
      pain: z.string(),
      feature: z.string(),
      screens: z.string().optional(),
      // segment=どの読者の一覧に載るか（URL: /crm/media/<segment>/）。edition=製品のエディション。
      segment: z.enum(['b2b', 'b2c']).default('b2b'),
      edition: z.enum(['b2b', 'school']).default('b2b'),
      help_slug: z.union([z.string(), z.number()]).transform(String).optional(),
      video: z.union([z.string(), z.number()]).transform(String).optional(),
      sources: z.string().optional(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      author: z.string(),
      // サイドバー「よく読まれている記事」の並び順（1が上）。閲覧数の取り込みまでは手動。
      featured: z.number().int().min(1).optional(),
      draft: z.boolean().default(false),
    }),
  }),

  blog: defineCollection({

    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),

    schema: z.object({

      wpId: z.number().optional(),

      title: z.string(),

      slug: z.string().optional().default(''),

      sourceUrl: z.string().optional().default(''),

      description: z.string().optional().default(''),

      pubDate: z.coerce.date().optional(),

      updatedDate: z.coerce.date().optional(),

      category: z.string().optional().default(''),

      tags: z.array(z.string()).optional().default([]),

      featuredImage: z.string().optional().default(''),

      featuredImageAlt: z.string().optional().default(''),

      draft: z.boolean().optional().default(false),

    }),

  }),

};

