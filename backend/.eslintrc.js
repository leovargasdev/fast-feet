module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    "prettier/prettier": "error",
    "camelcase": "off",
    "no-param-reassign": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
    "class-methods-use-this": "off"
  },
};
