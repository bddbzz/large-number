module.exports = {
  parser: "babel-eslint",
  plugins: [],
  parserOptions: {
    ecmaFeatures: {
      generators: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: "airbnb-base",
  rules: {
    "linebreak-style": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "import/extensions": 0
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ["src"]
      },
      webpack: {
        config: './build/webpack.lib.js',
      }
    },
  },
};
