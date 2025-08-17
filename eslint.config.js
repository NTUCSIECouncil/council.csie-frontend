import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

// settings are splitted into two categories since type systems are too computation-expensive
// and makes editors so slow
export default tseslint.config(
  // non type-aware configs
  {
    ignores: ['dist', '.next', 'node_modules'],
    plugins: {
      '@stylistic': stylistic,
    },
    extends: [
      eslint.configs.recommended,
      ...compat.config({ extends: ['next/core-web-vitals'] }),
      stylistic.configs.customize({
        semi: true,
        braceStyle: '1tbs',
      }),
    ],
    rules: {
      '@stylistic/max-statements-per-line': 'off',
    },
  },
  // type-aware settings
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        // Load <rootdir>/tsconfig.json
        typescript: true,
        node: true,
      },
    },
    extends: [
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...compat.config({ extends: ['next/typescript'] }),
    ],
    rules: {
      'sort-imports': ['warn', { ignoreDeclarationSort: true }],

      '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
      '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
      '@typescript-eslint/consistent-type-imports': ['warn', { fixStyle: 'inline-type-imports' }],

      'import/order': ['warn', {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        alphabetize: { order: 'asc' },
      }],
      'import/export': 'error',
      'import/no-duplicates': 'warn',
      'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],
    },
  },
);
