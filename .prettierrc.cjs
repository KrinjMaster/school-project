module.exports = {
  pluginSearchDirs: false, // you can omit this when using Prettier version 3
  plugins: [require('prettier-plugin-svelte')],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
}
