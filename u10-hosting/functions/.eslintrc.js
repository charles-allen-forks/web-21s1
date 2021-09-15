module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    'google',
    'standard-with-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.dev.json'],
    sourceType: 'module'
  },
  ignorePatterns: [
    '/dist/**/*',
    '/lib/**/*'
  ]
}
