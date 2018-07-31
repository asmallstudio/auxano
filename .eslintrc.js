module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ["react"],
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  rules: {
    "react/prop-types": 0
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.4.1"
    }
  }
};
