import { defineCollection, z } from 'astro:content'

const postCollection = defineCollection({
  schema: z.object({
    cover: z.string(),
    datePublishedAt: z.date(),
    disableAISummary: z.boolean(),
    summary: z.string(),
    tags: z.array(z.string()).min(1),
    title: z.string(),
  }),
  type: 'content',
})

export const collections = {
  post: postCollection,
}
