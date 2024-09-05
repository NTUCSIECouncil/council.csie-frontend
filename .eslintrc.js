const stylistic = require('@stylistic/eslint-plugin');

const customized = stylistic.configs.customize({
  braceStyle: '1tbs',
  semi: true,
})

module.exports = {
  root: true,
  ignorePatterns: [
    '/*',
    '!/src',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    projectService: true,
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'import',
    '@stylistic',
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'next/core-web-vitals',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:import/typescript',
    'next/core-web-vitals',
  ],
  rules: {
    ...customized.rules,

    'sort-imports': ['warn', { ignoreDeclarationSort: true }],

    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
    '@typescript-eslint/consistent-type-imports': ['warn', { fixStyle: 'inline-type-imports' }],
    
    'import/order': ['warn', {
      groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
      alphabetize: { order: 'asc' },
    }],
    'import/no-unresolved': 'error',
    'import/export': 'error',
    'import/no-duplicates': 'warn',

    '@stylistic/max-statements-per-line': 'off',
  },
};
