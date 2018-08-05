import ExtractTextPlugin from "extract-text-webpack-plugin";

/**
 * Creates the partial Webpack config that will override the default
 * config from React Static
 * https://react-static.js.org/docs/config#webpack
 * @param {*} config The previous configuration
 * @param {*} param1 The stage and loaders
 * @returns {object} The new Webpack config
 */
const createWebpackConfig = (config, { defaultLoaders, stage }) => {
  config.module.rules = [
    {
      oneOf: [
        {
          test: /\.s(a|c)ss$/,
          use:
            stage === "dev"
              ? [
                  { loader: "style-loader", options: { sourceMap: true } },
                  {
                    loader: "css-loader",
                    options: {
                      modules: true,
                      importLoaders: 2,
                      localIdentName: "[name]__[local]--[hash:base64:5]",
                      sourceMap: true,
                      namedExport: true,
                      camelCase: true,
                      minimize: false
                    }
                  },
                  {
                    loader: "postcss-loader",
                    options: {
                      config: {
                        // File must be named in one of these formats:
                        // https://github.com/michael-ciniawsky/postcss-load-config#usage
                        path: "src/configuration/"
                      }
                    }
                  },
                  {
                    loader: "sass-loader",
                    options: {
                      sourceMap: true
                    }
                  }
                ]
              : ExtractTextPlugin.extract({
                  use: [
                    {
                      loader: "css-loader",
                      options: {
                        minimize: true,
                        sourceMap: true,
                        modules: true,
                        importLoaders: 2,
                        localIdentName: process.env.REACT_STATIC_DEBUG
                          ? "[name]__[local]--[hash:base64:5]"
                          : undefined
                      }
                    },
                    {
                      loader: "postcss-loader",
                      options: {
                        config: {
                          // File must be named in one of these formats:
                          // https://github.com/michael-ciniawsky/postcss-load-config#usage
                          path: "src/configuration/"
                        }
                      }
                    },
                    {
                      loader: "sass-loader",
                      options: {
                        sourceMap: true,
                        includePaths: ["src/"]
                      }
                    }
                  ]
                })
        },
        defaultLoaders.cssLoader,
        defaultLoaders.jsLoader,
        defaultLoaders.fileLoader
      ]
    }
  ];
  return config;
};

export default createWebpackConfig;
