module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-essential', 'standard-with-typescript', 'plugin:storybook/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  plugins: ['vue'],
  rules: {},
  ignorePatterns: [
    'dist/*',
    '.output/*',
    '.nuxt/*',
    'node_modules/*',
    'stories/*',
    'storybook-static/*',
    '.storybook/*'
  ]
}
