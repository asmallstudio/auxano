module.exports = {
  plugins: {
    "postcss-normalize": {},
    "postcss-import": {},
    "postcss-custom-media": {}, // This depends on variables imported by postcss-import
    "postcss-custom-properties": {}, // This depends on variables imported by postcss-import
    "postcss-color-rgb": {},
    autoprefixer: {
      flexbox: "no-2009",
    },
    cssnano: {
      preset: [
        "default",
        {
          // Disables calc because it conflicts with env().
          // https://github.com/MoOx/reduce-css-calc/issues/34
          calc: false,
        },
      ],
    },
  },
};
