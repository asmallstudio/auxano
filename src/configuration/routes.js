import {
  getSingleFileYaml,
  getFolderCollection,
  createSlugsForArray
} from "../lib/utils/fileLoading";
import {
  createSlugFromTitleAndDate,
  createSlugFromTitle
} from "../lib/utils/copy";
import { makePageRoutes } from "react-static/node";

/**
 * Creates the site route pages
 * @returns {array} Array of page information objects
 */
const createRoutes = async () => {
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
  const taxManagement = getSingleFileYaml(
    "./src/data/pages/clientServices/taxManagement.yml"
  );
  const businessServices = getSingleFileYaml(
    "./src/data/pages/clientServices/businessServices.yml"
  );
  const corporateSolutions = getSingleFileYaml(
    "./src/data/pages/corporateSolutions.yml"
  );
  const careers = getSingleFileYaml("./src/data/pages/careers.yml");
  const newsItems = await getFolderCollection(
    "./src/data/news",
    createSlugFromTitleAndDate
  );
  const team = getSingleFileYaml("./src/data/pages/team.yml");
  team.members = createSlugsForArray(team.members, createSlugFromTitle);
  const contact = getSingleFileYaml("./src/data/pages/contact.yml");
  const disclosures = getSingleFileYaml("./src/data/pages/disclosures.yml");

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
      }),
      children: [
        {
          path: "/personal-finances",
          component:
            "src/components/pages/clientServices/personalFinances/PersonalFinances",
          getData: () => ({
            personalFinances
          })
        },
        {
          path: "/investments",
          component:
            "src/components/pages/clientServices/investments/investments",
          getData: () => ({
            investments
          })
        },
        {
          path: "/estate-planning",
          component:
            "src/components/pages/clientServices/estatePlanning/EstatePlanning",
          getData: () => ({
            estatePlanning
          })
        },
        {
          path: "/risk-management",
          component:
            "src/components/pages/clientServices/riskManagement/RiskManagement",
          getData: () => ({
            riskManagement
          })
        },
        {
          path: "/tax-management",
          component:
            "src/components/pages/clientServices/taxManagement/TaxManagement",
          getData: () => ({
            taxManagement
          })
        },
          component:
            "src/components/pages/clientServices/taxPlanning/TaxPlanning",
          getData: () => ({
            taxPlanning
          })
        },
        {
          path: "/business-services",
          component:
            "src/components/pages/clientServices/businessServices/BusinessServices",
          getData: () => ({
            businessServices
          })
        }
      ]
    },
    {
      path: "/corporate-solutions",
      component: "src/components/pages/corporateSolutions/CorporateSolutions",
      getData: () => ({
        corporateSolutions
      })
    },
    {
      path: "/careers",
      component: "src/components/pages/careers/Careers",
      getData: () => ({
        careers
      })
    },
    {
      path: "/team",
      component: "src/components/pages/team/index/Index",
      getData: () => ({
        members: team.members
      }),
      children: team.members.map(member => ({
        path: `${member.slug}`,
        component: "src/components/pages/team/member/Member",
        getData: () => ({
          member
        })
      }))
    },
    // Make an index route for every 5 blog posts
    ...makePageRoutes({
      items: newsItems,
      pageSize: 10,
      pageToken: "page", // use page for the prefix, eg. news/page/3
      route: {
        // Use this route as the base route
        path: "news",
        component: "src/components/pages/news/index/Index"
      },
      decorate: (posts, i, totalPages) => ({
        // For each page, supply the posts, page and totalPages
        getData: () => ({
          posts,
          currentPage: i,
          totalPages
        }),
        // Make the routes for each blog post
        children: posts.map(post => ({
          path: `${post.slug}`,
          component: "src/components/pages/news/post/Post",
          getData: () => ({
            post
          })
        }))
      })
    }),
    {
      path: "/contact",
      component: "src/components/pages/contact/Contact",
      getData: () => ({
        contact
      })
    },
    {
      path: "/disclosures",
      component: "src/components/pages/disclosures/Disclosures",
      getData: () => ({
        disclosures
      })
    }
  ];
};

export default createRoutes;
