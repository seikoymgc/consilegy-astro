
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

