module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'prettier',
    'prettier/vue',
  ],

  plugins: ["@typescript-eslint", 'vue'],

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true,
    Capacitor: true,
    chrome: true,
  },
  rules: {
    'no-param-reassign': 'warn',
    'no-unused-vars': 'warn',
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'implicit-arrow-linebreak': ['off'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],

    'import/first': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'prefer-promise-reject-errors': 'off',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};


