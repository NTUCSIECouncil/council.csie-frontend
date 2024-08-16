const stylistic = require('@stylistic/eslint-plugin');

const customized = stylistic.configs.customize({
  semi: true,
})

module.exports = {
  root: true,
  ignorePatterns: [
    '/*',
    '!/src',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'next/core-web-vitals'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    projectService: true,
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    '@stylistic'
  ],
  rules: {
    ...customized.rules,

    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],

    '@stylistic/max-statements-per-line': 'off',
  },
};
