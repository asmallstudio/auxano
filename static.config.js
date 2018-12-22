import constants from "./src/lib/constants.json";
import createDocument from "./src/configuration/document";
import createWebpackConfig from "./src/configuration/webpack";
import createRoutes from "./src/configuration/routes";
import getSiteData from "./src/configuration/getSiteData";

export default {
  siteRoot: constants.siteMeta.url,
  getSiteData: getSiteData,
  getRoutes: createRoutes,
  Document: createDocument,
  webpack: createWebpackConfig
};
