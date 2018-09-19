const fs = require("fs");
const themeJSON = "./src/lib/theme.json";
const themeCSS = "./src/components/styles/theme.css";
const themeExists = fs.existsSync(themeCSS);

module.exports = {
  ident: "postcss",
  sourceMap: true,
  parser: "postcss-scss",
  plugins: {
    // Exports to file that is then imported.
    "postcss-custom-properties": {
      importFrom: themeJSON,
      exportTo: themeExists ? null : themeCSS
    },
    "postcss-import": {},
    /* The previous instance of postcss-custom-properties moved 
     * the variables from JSON to CSS for import via postcss-import.
     * Now, the custom properties need to be processed for fallbacks.
     */
    // eslint-disable-next-line no-dupe-keys
    "postcss-custom-properties": {
      importFrom: themeJSON,
      exportTo: themeExists ? null : themeCSS
    },
    "postcss-normalize": {},
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
