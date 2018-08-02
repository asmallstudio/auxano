import { getSingleFileYaml } from "../lib/utils/fileLoading";

/**
 * Creates the site route pages
 * @returns {array} Array of page information objects
 */
const createRoutes = () => {
  const home = getSingleFileYaml("./src/data/pages/home.yml");
  const aboutUs = getSingleFileYaml("./src/data/pages/aboutUs.yml");
  const other = getSingleFileYaml("./src/data/pages/other.yml");
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
};

export default createRoutes;
