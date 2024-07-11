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

export const collections = {
  posts: postCollection,
}
