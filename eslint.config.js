import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    astro: true,
    typescript: {
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
    formatters: true,
  },
  ...tailwind.configs['flat/recommended'],
)
