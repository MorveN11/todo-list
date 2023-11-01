module.exports = {
  root: true,
  ignorePatterns: ['projects/**/*', 'dist/**/*', 'node_modules/**/*'],
  plugins: ['simple-import-sort'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    extraFileExtensions: ['.html'],
  },
  env: {
    browser: true,
    jasmine: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.ts'],
      plugins: ['@typescript-eslint', 'prettier'],
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'prettier',
      ],
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
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            '': 'never',
            ts: 'never',
            tsx: 'never',
            js: 'never',
            jsx: 'never',
            html: 'always',
          },
        ],
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended', 'plugin:tailwindcss/recommended', 'prettier'],
      plugins: ['tailwindcss', 'prettier'],
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
      },
    },
  ],
};
