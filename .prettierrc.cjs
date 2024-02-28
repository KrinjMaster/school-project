module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  plugins: [require('prettier-plugin-svelte')],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
}
