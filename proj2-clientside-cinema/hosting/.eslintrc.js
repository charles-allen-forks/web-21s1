module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      extends: [
        'plugin:vue/recommended',
        '@vue/standard',
        '@vue/typescript/recommended',
        'standard-with-typescript'
      ],
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2021,
        extraFileExtensions: ['.vue'],
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.json'],
        sourceType: 'module',
        tsconfigRootDir: __dirname
      }
    }
  ]
}
