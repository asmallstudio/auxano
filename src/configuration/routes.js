import { getSingleFileYaml } from "../lib/utils/fileLoading";

/**
 * Creates the site route pages
 * @returns {array} Array of page information objects
 */
const createRoutes = () => {
  const home = getSingleFileYaml("./src/data/pages/home.yml");
  const aboutUs = getSingleFileYaml("./src/data/pages/aboutUs.yml");
  const ourApproach = getSingleFileYaml("./src/data/pages/ourApproach.yml");
  const clientServices = getSingleFileYaml(
    "./src/data/pages/clientServices.yml"
  );
  const personalFinances = getSingleFileYaml(
    "./src/data/pages/clientServices/personalFinances.yml"
  );
  const contact = getSingleFileYaml("./src/data/pages/contact.yml");
  const other = getSingleFileYaml("./src/data/pages/other.yml");
  return [
    {
      path: "/",
      component: "src/components/pages/home/Home",
      getData: () => ({
        home
      })
    },
    {
      path: "/about-us",
      component: "src/components/pages/aboutUs/AboutUs",
      getData: () => ({
        aboutUs
      })
    },
    {
      path: "/our-approach",
      component: "src/components/pages/ourApproach/OurApproach",
      getData: () => ({
        ourApproach
      })
    },
    {
      path: "/client-services",
      component: "src/components/pages/clientServices/ClientServices",
      getData: () => ({
        clientServices
      })
    },
    {
      path: "/client-services/personal-finances",
      component:
        "src/components/pages/clientServices/personalFinances/PersonalFinances",
      getData: () => ({
        personalFinances
      })
    },
    {
      path: "/contact",
      component: "src/components/pages/contact/Contact",
      getData: () => ({
        contact
      })
    },
    {
      path: "/other",
      component: "src/components/pages/other/Other",
      getData: () => ({
        other
      })
    },
    {
      is404: true,
      component: "src/components/pages/404/404"
    }
  ];
};

export default createRoutes;
