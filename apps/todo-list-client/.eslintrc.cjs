module.exports = {
  root: true,
  ignorePatterns: ['projects/**/*', 'dist/**/*', 'node_modules/**/*'],
  plugins: ['unused-imports', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    jasmine: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: ['airbnb-base', 'airbnb-typescript/base'],
      plugins: ['@angular-eslint/eslint-plugin', 'tailwindcss', 'prettier'],
      rules: {
        'max-len': [
          'error',
          {
            code: 120,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
          },
        ],
        quotes: [
          2,
          'single',
          {
            avoidEscape: true,
          },
        ],
        'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
        'import/prefer-default-export': 'off',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'max-len': ['error', 120],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-explicit-any': 0,
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase',
          },
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case',
          },
        ],
      },
    },
  ],
};
