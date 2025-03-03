import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import reactHooks from 'eslint-plugin-react-hooks'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

const baseConfig = [
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'react-hooks': fixupPluginRules(reactHooks),
      import: fixupPluginRules(importPlugin),
      'unused-imports': fixupPluginRules(unusedImportsPlugin),
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
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
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

const nextJsConfig = compat.extends('plugin:@next/next/recommended')

const nextJsApps = ['product/app', 'product/ui-demo']

const nextJsConfigs = nextJsApps.map((appPath) => ({
  files: [`${appPath}/**/*.{js,jsx,ts,tsx}`],
  ...nextJsConfig[0],
  settings: {
    next: {
      rootDir: appPath,
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': ['error', `${appPath}/pages`],
  },
}))

export default [...baseConfig, ...nextJsConfigs]
