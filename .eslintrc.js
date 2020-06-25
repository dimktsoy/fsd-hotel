module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 11
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'no-underscore-dangle': [2, { allowAfterThis: true }],
    'no-new': 0,
    'prettier/prettier': ['error']
  }
};
