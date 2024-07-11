import { defineCollection, z } from 'astro:content'

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
  }),
})

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
  }),
})

const i18nCollection = defineCollection({
  type: 'data',
  schema: z.object({
    locale: z.string(),
    translations: z.record(z.string()),
  }),
})

export const collections = {
  posts: postCollection,
  pages: pagesCollection,
  i18n: i18nCollection,
}
