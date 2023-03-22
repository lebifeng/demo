module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint-config-airbnb'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
