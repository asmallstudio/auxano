module.exports = {
  parser: "postcss-scss",
  sourceMap: true,
  ident: "postcss",
  plugins: {
    "postcss-normalize": {},
    "postcss-custom-properties": {
      importFrom: "./src/lib/theme.json",
      exportTo: "./src/components/styles/theme.css"
    },
    "postcss-flexbugs-fixes": {},
    autoprefixer: {
      flexbox: "no-2009"
    }
  }
};
