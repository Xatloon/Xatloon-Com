/** @type {import('astro').AstroConfig} */
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import { readingTime } from './utils/reading-time.js'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(
    {
      applyBaseStyles: false,
    },
  )],
  markdown: {
    remarkPlugins: [readingTime],
  },
})
