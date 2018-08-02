module.exports = {
  parser: "postcss-scss",
  sourceMap: true,
  ident: "postcss",
  plugins: {
    "postcss-normalize": {},
    "postcss-custom-properties": {
      variables: require("../lib/theme.json"),
      appendVariables: true,
      warnings: true
    },
    "postcss-flexbugs-fixes": {},
    autoprefixer: {
      flexbox: "no-2009"
    }
  }
};
