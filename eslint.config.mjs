import typescriptEslint from '@typescript-eslint/eslint-plugin'
import reactHooks from 'eslint-plugin-react-hooks'
import { fixupPluginRules } from '@eslint/compat'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

// Base configuration for all projects
const baseConfig = [
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'react-hooks': fixupPluginRules(reactHooks),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {
      'no-empty': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-empty-object-type': [
        'off',
        { allowEmptyObject: true },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  },
  {
    ignores: [
      '**/next-sitemap.config.js',
      '**/next.config.js',
      '**/.next/**',
      '**/out/**',
      '**/dist/**',
      '**/public/sw.js',
      '**/public/workbox-*.js',
      '**/.react-email/**',
    ],
  },
]

// Next.js specific configuration
const nextJsConfig = compat.extends('plugin:@next/next/recommended')

export default [
  // Base rules for all files
  ...baseConfig,

  // Next.js rules for product/app
  {
    files: ['product/app/**/*.{js,jsx,ts,tsx}'],
    ...nextJsConfig[0],
    settings: {
      next: {
        rootDir: 'product/app',
      },
    },
    rules: {
      '@next/next/no-html-link-for-pages': ['error', 'product/app/pages'],
    },
  },

  // Next.js rules for product/ui-demo
  {
    files: ['product/ui-demo/**/*.{js,jsx,ts,tsx}'],
    ...nextJsConfig[0],
    settings: {
      next: {
        rootDir: 'product/ui-demo',
      },
    },
    rules: {
      '@next/next/no-html-link-for-pages': ['error', 'product/ui-demo/pages'],
    },
  },
]
