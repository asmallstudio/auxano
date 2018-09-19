module.exports = {
  parser: "postcss-scss",
  sourceMap: true,
  ident: "postcss",
  plugins: {
    // Exports to file that is then imported.
    "postcss-custom-properties": {
      importFrom: "./src/lib/theme.json",
      exportTo: "./src/components/styles/theme.css"
    },
    "postcss-import": {},
    "postcss-normalize": {},
    /* The previosu instance of postcss-custom-properties moved 
     * the variables from JSON to CSS for import via postcss-import.
     * Now, the custom properties need to be processed for fallbacks.
     */
    // eslint-disable-next-line no-dupe-keys
    "postcss-custom-properties": {},
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
