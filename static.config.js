const fs = require("fs");
const matter = require("gray-matter");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const postcssFlexbugsFixes = require("postcss-flexbugs-fixes");
const autoprefixer = require("autoprefixer");
const React = require("react");

function getSingleFile(path) {
  const getFiles = () =>
    new Promise(resolve => {
      if (fs.existsSync(path)) {
        const data = fs.readFileSync(path, "utf8");
        const dataObj = matter(data);
        if (dataObj.data.title) {
          dataObj.data.slug = dataObj.data.title
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
        }
        delete dataObj.orig;
        resolve(dataObj);
      }
    });
  return getFiles();
}

export default {
  siteRoot: "https://react-static-boilerplate.netlify.com",
  getSiteData: () => ({
    title: "Transitus"
  }),
  getRoutes: async () => {
    const home = await getSingleFile("./src/data/pages/home.md");
    return [
      {
        path: "/",
        component: "src/components/screens/home/Home",
        getData: () => ({
          home
        })
      },
      {
        is404: true,
        component: "src/components/screens/404/404"
      }
    ];
  },
  Document: function createDocument({
    Html,
    Head,
    Body,
    children,
    renderMeta
  }) {
    return (
      <Html>
        <Head>
          <title>The Next Thing</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {renderMeta.styleTags}
        </Head>
        <Body>{children}</Body>
      </Html>
    );
  },
  webpack: (config, { defaultLoaders, stage }) => {
    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            use:
              stage === "dev"
                ? [
                    { loader: "style-loader" },
                    {
                      loader: "css-loader",
                      options: {
                        modules: true,
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
                        sourceMap: true,
                        ident: "postcss",
                        plugins: () => [
                          postcssFlexbugsFixes,
                          autoprefixer({
                            browsers: [
                              ">1%",
                              "last 4 versions",
                              "Firefox ESR",
                              "not ie < 9" // React doesn't support IE8 anyway
                            ],
                            flexbox: "no-2009"
                          })
                        ]
                      }
                    },
                    { loader: "sass-loader" }
                  ]
                : ExtractTextPlugin.extract({
                    use: [
                      {
                        loader: "css-loader",
                        options: {
                          minimize: true,
                          sourceMap: process.env.REACT_STATIC_DEBUG,
                          modules: true,
                          localIdentName: process.env.REACT_STATIC_DEBUG
                            ? "[name]__[local]--[hash:base64:5]"
                            : undefined
                        }
                      },
                      {
                        loader: "postcss-loader",
                        options: {
                          sourceMap: true,
                          ident: "postcss",
                          plugins: () => [
                            postcssFlexbugsFixes,
                            autoprefixer({
                              browsers: [
                                ">1%",
                                "last 4 versions",
                                "Firefox ESR",
                                "not ie < 9" // React doesn't support IE8 anyway
                              ],
                              flexbox: "no-2009"
                            })
                          ]
                        }
                      },
                      {
                        loader: "sass-loader",
                        options: { includePaths: ["src/"] }
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
  }
};
