module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
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
  ],
  rules: {
    'import/prefer-default-export': [0],
    'react/jsx-filename-extension': [0],
    'react/jsx-indent': [0],
    'no-unused-labels': [0],
    'no-labels': [0],
    'react/forbid-prop-types': [0]
  },
};
