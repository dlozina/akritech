import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  { files: ['**/*.{js,mjs}'], extends: [js.configs.recommended] },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommended,
      nextPlugin.configs['core-web-vitals'],
    ],
    rules: {
      // Static export uses optimized local assets with explicit dimensions.
      '@next/next/no-img-element': 'off',
    },
  },
  {
    files: ['*.config.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: { process: 'readonly' },
    },
  },
  globalIgnores(['.next/**', 'out/**', 'next-env.d.ts']),
]);
