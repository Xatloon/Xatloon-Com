/** @type {import('tailwindcss').Config} */
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['mingcute']),
    }),
    require('@tailwindcss/typography'),
  ],
}
