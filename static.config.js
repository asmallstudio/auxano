import createDocument from "./src/configuration/document";
import createWebpackConfig from "./src/configuration/webpack";
import createRoutes from "./src/configuration/routes";

export default {
  getRoutes: createRoutes,
  Document: createDocument,
  webpack: createWebpackConfig
};
