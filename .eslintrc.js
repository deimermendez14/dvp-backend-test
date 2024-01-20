module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'hexagonal-architecture',
    'eslint-plugin-simple-import-sort',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    'no-console': 2,
    '@typescript-eslint/explicit-module-boundary-types': 2,
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^@nestjs/(.*)$', '^@?\\w'],
          [
            '^\\.\\/log/',
            '^\\.\\/infrastructure/',
            '^\\.\\/application',
            '^\\.\\/domain/',
          ],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['src/**/*.ts'],
      rules: {
        'hexagonal-architecture/enforce': ['error'],
      },
    },
    {
      files: [
        'src/**/*.module.ts',
        'src/main.ts',
        'src/**/*.config.ts',
        'src/**/migrations/**',
        '*.spec.ts',
      ],
      rules: {
        'hexagonal-architecture/enforce': 'off',
      },
    },
  ],
};
