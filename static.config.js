import constants from "./src/lib/constants.json";
import createDocument from "./src/configuration/document";
import createRoutes from "./src/configuration/routes";
import getSiteData from "./src/configuration/getSiteData";

const isCI = () => process.env.CI === "true";

export default {
  plugins: ["@asmallstudio/plugin-react-static-css-modules-postcss-sass"],
  siteRoot: constants.siteMeta.url,
  getSiteData: getSiteData,
  getRoutes: createRoutes,
  Document: createDocument,
  maxThreads: isCI ? 6 : Infinity
};
