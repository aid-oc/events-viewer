module.exports = {
  env: {
    browser: false,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb'],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'no-underscore-dangle': 'off',
  },
};
