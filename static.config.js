import constants from "./src/lib/constants.json";
import createDocument from "./src/configuration/document";
import createRoutes from "./src/configuration/routes";
import getSiteData from "./src/configuration/getSiteData";
import path from "path";

const isCI = process.env.CI === "true";

export default {
  plugins: [
    [
      "react-static-plugin-source-filesystem",
      {
        location: path.resolve("./src/pages")
      }
    ],
    "react-static-plugin-sitemap",
    "react-static-plugin-reach-router",
    "@asmallstudio/plugin-react-static-css-modules-postcss-sass"
  ],
  siteRoot: constants.siteMeta.url,
  getSiteData: getSiteData,
  getRoutes: createRoutes,
  Document: createDocument,
  maxThreads: isCI && 6
};
