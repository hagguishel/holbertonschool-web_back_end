// .eslintrc.js
module.exports = {
  env: {
    browser: false,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    // moins strict que "plugin:jest/all", évite jest/require-hook inutile
    'plugin:jest/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
  },

  // ✅ Relax sur les runners Holberton (0-main.js, 1-main.js, ...)
  overrides: [
    {
      files: ['**/*-main.js'],
      env: { jest: false },
      rules: {
        'jest/require-hook': 'off',
        'import/extensions': 'off', // tolère l'import avec ".js"
        'new-cap': 'off', // tolère "new getNeighborhoodsList()"
        semi: 'off', // tolère l'absence de ;
      },
    },
  ],
};
