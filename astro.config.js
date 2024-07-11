/** @type {import('astro').AstroConfig} */
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import viteFont from 'vite-plugin-font'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false,
  }), mdx()],
  vite: {
    plugins: [viteFont({
      scanFiles: ['src/**/*', 'tailwind.config.js'],
    })],
  },
})
