import antfu from '@antfu/eslint-config'
import astro from 'eslint-plugin-astro'
import astroParser from 'astro-eslint-parser'
import globals from 'globals'

export default antfu(
  {
    stylistic: true, // enable stylistic formatting rules
    typescript: true,
    vue: false,
    jsonc: true,
    yml: true,
  },
  [
    {
      ignores: [
        '.astro/*',
        'src/env.d.ts',
      ],
    },
    {
      files: ['**/*.astro'],
      plugins: {
        astro,
      },
      languageOptions: {
        globals: {
          ...globals.node,
          ...astro.environments.astro.globals,
          ...globals.es2020,
        },
        parser: astroParser,
        parserOptions: {
          parser: '@typescript-eslint/parser',
          extraFileExtensions: ['.astro'],
          sourceType: 'module',
        },
      },
      rules: {
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'error',
        'no-unused-vars': 'off',
      },
    },
    {
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.es2020,
        },
        parserOptions: {
          sourceType: 'module',
        },
      },
      rules: {
        'prettier/prettier': 'off',
      },
    },
  ],
)
