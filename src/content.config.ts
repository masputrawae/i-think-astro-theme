import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { SITE } from './consts';

const post = defineCollection({
  loader: glob({ base: './src/content', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional().default(SITE.description),
      tags: z.array(z.string()).optional(),
      categories: z.array(z.string()).optional(),
      series: z.array(z.string()).optional(),
      pubDate: z.coerce.date().optional().default(new Date()),
      updatedDate: z.coerce.date().optional().default(new Date()),
      heroImage: z.optional(image()).default(SITE.heroImage),
    }),
});

export const collections = { post };

