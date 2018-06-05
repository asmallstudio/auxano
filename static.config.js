const fs = require("fs");
const klaw = require("klaw");
const path = require("path");
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
        dataObj.data.slug = dataObj.data.title
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "");
        delete dataObj.orig;
        resolve(dataObj);
      }
    });
  return getFiles();
}

export default {
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
        path: "/contact-us",
        component: "src/components/screens/contactUs/ContactUs",
        getData: () => ({
          data: null // Does not need data for now
        })
      },
      {
        is404: true,
        component: "src/components/screens/404/404"
      }
    ];
  },
  Document: ({ Html, Head, Body, children, renderMeta }) => (
    <Html>
      <Head>
        <title>Transitus</title>
        <link
          rel="icon"
          type="image/png"
          href="favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicon-16x16.png"
          sizes="16x16"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {renderMeta.styleTags}
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
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
