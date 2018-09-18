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
  const investments = getSingleFileYaml(
    "./src/data/pages/clientServices/investments.yml"
  );
  const estatePlanning = getSingleFileYaml(
    "./src/data/pages/clientServices/estatePlanning.yml"
  );
  const riskManagement = getSingleFileYaml(
    "./src/data/pages/clientServices/riskManagement.yml"
  );
  const taxPlanning = getSingleFileYaml(
    "./src/data/pages/clientServices/taxPlanning.yml"
  );
  const businessServices = getSingleFileYaml(
    "./src/data/pages/clientServices/businessServices.yml"
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
      path: "/client-services/investments",
      component: "src/components/pages/clientServices/investments/investments",
      getData: () => ({
        investments
      })
    },
    {
      path: "/client-services/estate-planning",
      component:
        "src/components/pages/clientServices/estatePlanning/EstatePlanning",
      getData: () => ({
        estatePlanning
      })
    },
    {
      path: "/client-services/risk-management",
      component:
        "src/components/pages/clientServices/riskManagement/RiskManagement",
      getData: () => ({
        riskManagement
      })
    },
    {
      path: "/client-services/tax-planning",
      component: "src/components/pages/clientServices/taxPlanning/TaxPlanning",
      getData: () => ({
        taxPlanning
      })
    },
    {
      path: "/client-services/business-services",
      component:
        "src/components/pages/clientServices/businessServices/BusinessServices",
      getData: () => ({
        businessServices
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
