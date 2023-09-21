import { sxzz } from "@sxzz/eslint-config";
import astro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";

export default sxzz([
	{
		ignores: [
			".astro/*",
			"src/env.d.ts"
		],
	},
	{
		files: ["src/**/*.astro"],
		plugins: {
			astro,
		},
		languageOptions: {
			globals: {
				...astro.environments.astro.globals
			},
			parser: astroParser,
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
				sourceType: 'module',
			}	
		}
	}
],
{ vue: false, prettier: false }
)
