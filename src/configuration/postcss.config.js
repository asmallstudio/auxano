module.exports = {
  parser: "postcss-scss",
  sourceMap: true,
  ident: "postcss",
  plugins: {
    "postcss-import": {},
    "postcss-normalize": {},
    "postcss-custom-properties": {
      importFrom: "./src/lib/theme.json",
      exportTo: "./src/components/styles/theme.css"
    },
    "postcss-flexbugs-fixes": {},
    autoprefixer: {
      flexbox: "no-2009"
    },
    cssnano: {
      preset: [
        "default",
        {
          // Disables calc because it conflicts with env().
          // https://github.com/MoOx/reduce-css-calc/issues/34
          calc: false
        }
      ]
    }
  }
};
