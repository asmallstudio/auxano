import fs from "fs";
import React from "react";
import Helmet from "react-helmet";
import yaml from "js-yaml";
import ExtractTextPlugin from "extract-text-webpack-plugin";

export default {
  getSiteData: () => ({
    title: "Auxano"
  }),
  getRoutes: async () => {
    const home = yaml.safeLoad(
      fs.readFileSync("./src/data/pages/home.yml", "utf8")
    );
    const other = yaml.safeLoad(
      fs.readFileSync("./src/data/pages/other.yml", "utf8")
    );
    const aboutUs = yaml.safeLoad(
      fs.readFileSync("./src/data/pages/aboutUs.yml", "utf8")
    );

    return [
      {
        path: "/",
        component: "src/components/screens/home/Home",
        getData: () => ({
          home
        })
      },
      {
        path: "/about-us",
        component: "src/components/screens/aboutUs/AboutUs",
        getData: () => ({
          aboutUs
        })
      },
      {
        path: "/other",
        component: "src/components/screens/other/Other",
        getData: () => ({
          other
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
    /* <Helmet> replaces <Head> */
    return (
      <Html>
        <Helmet>
          <title>Auxano</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#50b8b8" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="icon" href="/assets/favicons/favicon-64.png" />
          <link
            rel="mask-icon"
            href="/assets/favicons/favicons.svg"
            color="#50b8b8"
          />
          {renderMeta.styleTags}
        </Helmet>
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
                    { loader: "postcss-loader" },
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
                      { loader: "postcss-loader" },
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
  }
};
