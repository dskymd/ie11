module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    // parser: '@typescript-eslint/parser'
    parser: 'babel-eslint'
  },
  // "extends": "eslint:recommended"
  extends: [
    // '@nuxtjs',
    // 'standard',
    // 'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier'
    // 'prettier/vue'
  ],
  plugins: ['prettier'],
  // , '@typescript-eslint'
  // add your custom rules here
  rules: {
    'no-console': 'off'
  }
}
