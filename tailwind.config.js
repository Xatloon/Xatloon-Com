/** @type {import('tailwindcss').Config} */
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'
import typographyPlugin from '@tailwindcss/typography'

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,mdx,ts,tsx}'],
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['mingcute']),
    }),
    typographyPlugin(),
  ],
}
