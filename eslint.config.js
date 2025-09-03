import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
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
    extends: [
      eslint.configs.recommended,
      ...compat.config({ extends: ['next/core-web-vitals'] }),
      eslintConfigPrettier,
    ],
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
    extends: [
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...compat.config({ extends: ['next/typescript'] }),
      eslintConfigPrettier, // used twice to suppress stylisticTypeChecked from tseslint
    ],
    rules: {
      'sort-imports': ['warn', { ignoreDeclarationSort: true }],

      '@typescript-eslint/no-empty-object-type': [
        'error',
        { allowInterfaces: 'with-single-extends' },
      ],
      '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { fixStyle: 'inline-type-imports' },
      ],
    },
  },
);
