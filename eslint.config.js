import js from '@eslint/js'
import prettierPlugin from 'eslint-plugin-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // General configuration
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended], // Base configurations for JavaScript and TypeScript
    files: ['**/*.{ts,tsx,js}'], // Apply ESLint rules to these file types
    languageOptions: {
      ecmaVersion: 2022, // ECMAScript 2022 support
      globals: globals.browser, // Include browser globals
    },
    plugins: {
      'react-hooks': reactHooks, // React Hooks plugin
      'react-refresh': reactRefresh, // React Refresh plugin
      'simple-import-sort': simpleImportSort, // Plugin to enforce sorted imports
      prettier: prettierPlugin, // Prettier plugin for formatting
    },
    rules: {
      // React Refresh rule for restricting export patterns
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // Enforce sorting imports
      'simple-import-sort/imports': 'error',

      // General stylistic rules
      semi: ['error', 'never'], // Disallow semicolons at the end of lines
      'no-multi-spaces': 'error', // Disallow multiple spaces
      'no-trailing-spaces': 'error', // Disallow trailing whitespace
      'space-in-parens': ['error', 'never'], // Disallow spaces inside parentheses
      'space-before-function-paren': ['error', 'never'], // Disallow space before function parentheses
      'object-curly-spacing': ['error', 'always'], // Require spaces inside braces
      'array-bracket-spacing': ['error', 'never'], // Disallow spaces inside array brackets
      'key-spacing': ['error', { beforeColon: false, afterColon: true }], // Enforce spacing around colons in object literals
      'comma-spacing': ['error', { before: false, after: true }], // Enforce spacing around commas
      'block-spacing': ['error', 'always'], // Require spaces inside single-line blocks
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }], // Restrict multiple empty lines
      'max-len': ['error', { code: 100, tabWidth: 2, ignoreComments: true }], // Restrict line length to 100 characters

      // Prettier configuration rules
      'prettier/prettier': [
        'error',
        {
          printWidth: 100, // Maximum line width
          semi: false, // Disallow semicolons
          singleQuote: true, // Use single quotes
          trailingComma: 'es5', // Include trailing commas where valid in ES5
          bracketSpacing: true, // Require spaces inside object literal braces
          arrowParens: 'avoid', // Avoid parentheses around single arrow function parameters
        },
      ],
    },
  }
)
