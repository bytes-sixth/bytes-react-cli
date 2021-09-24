/**
 * @type {import('eslint').Linter.Config} config
 */
const eslintConfig = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {},
  plugins: [],
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  ignorePatterns: ['**/node_modules/**', 'dist', 'lib', '**/__snapshots__/**'],
}

module.exports = eslintConfig
