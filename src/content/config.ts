import { defineCollection, z } from 'astro:content'

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    publishedAt: z.date(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
})

export const collections = {
  posts: postCollection,
}
