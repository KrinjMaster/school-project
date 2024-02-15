module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    extraFileExtensions: ['.svelte'],
  },
  rules: {
    // override/add rules settings here, such as:
    // 'svelte/rule-name': 'error'
    'comma-style': ['error', 'last'],
    quotes: ['error', 'single', { avoidEscape: true }],
  },
  ignorePatterns: ['*.config.js'],
}
