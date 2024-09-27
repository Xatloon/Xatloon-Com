/** @type {import('tailwindcss').Config} */
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'
import typographyPlugin from '@tailwindcss/typography'

export default {
  content: ['./src/**/*.{astro,mdx,ts,tsx}'],
  darkMode: 'class',
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['mingcute']),
    }),
    typographyPlugin(),
  ],
}
