module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  plugins: [
    'vue'
  ],
  rules: {
  },
  ignorePatterns: [
    'dist/*',
    '.output/*',
    '.nuxt/*',
    'node_modules/*'
  ]
}
