module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ['airbnb-base', 'prettier', 'plugin:fsd/all'],
  parserOptions: {
    ecmaVersion: 11
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  plugins: ['prettier', 'fsd'],
  rules: {}
};
