module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
  ],
  overrides: [
    {
      files: ['src/tests/**/*.tsx'],
      rules: {
        'no-magic-numbers': ['off'],
        'max-len': [
          'error',
          {
            code: 90,
            ignoreComments: true,
            ignoreUrls: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
          },
        ],
        'max-lines': ['off'],
        'no-magic-numbers': ['off'],
        'no-unused-vars': ['off'],
        'react/jsx-filename-extension': ['off'],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-extraneous-dependencies': 'off',
    'no-magic-numbers': ['error', { ignore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',
    'label-has-associated-control': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'max-len': [
      'error',
      {
        code: 90,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
      },
    ],
  },
};
