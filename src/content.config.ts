import { defineCollection } from 'astro:content'
import { file, glob } from 'astro/loaders'
import { z } from 'astro/zod'

const services = defineCollection({
  loader: glob({ base: './src/content/services', pattern: '**/*.json' }),
  schema: z.object({
    title: z.string(),
    imageKey: z.string(),
    imageAlt: z.string(),
    excerpt: z.string().optional(),
    body: z.array(z.string()),
  }),
})

const gallery = defineCollection({
  loader: file('src/content/gallery/items.json'),
  schema: z.object({
    caption: z.string(),
    imageKey: z.string(),
    order: z.number(),
    linked: z.boolean().default(false),
  }),
})

const areas = defineCollection({
  loader: file('src/content/areas/coverage.json'),
  schema: z.object({
    group: z.enum(['Calderdale', 'Kirklees', 'Other areas']),
    towns: z.array(z.string()),
  }),
})

export const collections = { services, gallery, areas }
