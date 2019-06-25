import {
  createSlugFromTitle,
  createSlugFromTitleAndDate
} from "@asmallstudio/utilities";
import {
  getSingleFileYaml,
  getFolderCollection,
  createSlugsForArray
} from "@asmallstudio/utilities/node";
import { makePageRoutes } from "react-static/node";

/**
 * Creates the site route pages
 * @returns {array} Array of page information objects
 */
const createRoutes = async () => {
  const home = await getSingleFileYaml("./src/data/pages/home.yml");
  const aboutUs = await getSingleFileYaml("./src/data/pages/aboutUs.yml");
  const ourApproach = await getSingleFileYaml(
    "./src/data/pages/ourApproach.yml"
  );
  const clientServices = await getSingleFileYaml(
    "./src/data/pages/clientServices.yml"
  );
  const personalFinances = await getSingleFileYaml(
    "./src/data/pages/clientServices/personalFinances.yml"
  );
  const investments = await getSingleFileYaml(
    "./src/data/pages/clientServices/investments.yml"
  );
  const estatePlanning = await getSingleFileYaml(
    "./src/data/pages/clientServices/estatePlanning.yml"
  );
  const riskManagement = await getSingleFileYaml(
    "./src/data/pages/clientServices/riskManagement.yml"
  );
  const taxManagement = await getSingleFileYaml(
    "./src/data/pages/clientServices/taxManagement.yml"
  );
  const businessServices = await getSingleFileYaml(
    "./src/data/pages/clientServices/businessServices.yml"
  );
  const corporateBenefitsPlanning = await getSingleFileYaml(
    "./src/data/pages/clientServices/corporateBenefitsPlanning.yml"
  );
  const legacyPlanning = await getSingleFileYaml(
    "./src/data/pages/legacyPlanning.yml"
  );
  const careers = await getSingleFileYaml("./src/data/pages/careers.yml");
  const newsItems = await getFolderCollection(
    "./src/data/news",
    "yml",
    getSingleFileYaml,
    createSlugFromTitleAndDate
  );
  const team = await getSingleFileYaml("./src/data/pages/team.yml");
  team.members = createSlugsForArray(team.members, createSlugFromTitle);
  const contact = await getSingleFileYaml("./src/data/pages/contact.yml");
  const disclosures = await getSingleFileYaml(
    "./src/data/pages/disclosures.yml"
  );

  return [
    {
      path: "/",
      template: "src/components/pages/home/Home",
      getData: () => ({
        home
      })
    },
    {
      path: "/about-us",
      template: "src/components/pages/aboutUs/AboutUs",
      getData: () => ({
        aboutUs
      })
    },
    {
      path: "/our-approach",
      template: "src/components/pages/ourApproach/OurApproach",
      getData: () => ({
        ourApproach
      })
    },
    {
      path: "/client-services",
      template: "src/components/pages/clientServices/ClientServices",
      getData: () => ({
        clientServices
      }),
      children: [
        {
          path: "/personal-finances",
          template:
            "src/components/pages/clientServices/personalFinances/PersonalFinances",
          getData: () => ({
            personalFinances
          })
        },
        {
          path: "/investments",
          template:
            "src/components/pages/clientServices/investments/investments",
          getData: () => ({
            investments
          })
        },
        {
          path: "/estate-planning",
          template:
            "src/components/pages/clientServices/estatePlanning/EstatePlanning",
          getData: () => ({
            estatePlanning
          })
        },
        {
          path: "/risk-management",
          template:
            "src/components/pages/clientServices/riskManagement/RiskManagement",
          getData: () => ({
            riskManagement
          })
        },
        {
          path: "/tax-management",
          template:
            "src/components/pages/clientServices/taxManagement/TaxManagement",
          getData: () => ({
            taxManagement
          })
        },
        {
          path: "/corporate-benefits-planning",
          template:
            "src/components/pages/clientServices/corporateBenefitsPlanning/CorporateBenefitsPlanning",
          getData: () => ({
            corporateBenefitsPlanning
          })
        },
        {
          path: "/business-services",
          template:
            "src/components/pages/clientServices/businessServices/BusinessServices",
          getData: () => ({
            businessServices
          })
        }
      ]
    },
    {
      path: "/legacy-planning",
      template: "src/components/pages/legacyPlanning/LegacyPlanning",
      getData: () => ({
        legacyPlanning
      })
    },
    {
      path: "/careers",
      template: "src/components/pages/careers/Careers",
      getData: () => ({
        careers
      })
    },
    {
      path: "/team",
      template: "src/components/pages/team/index/Index",
      getData: () => ({
        members: team.members
      }),
      children: team.members.map(member => ({
        path: `${member.slug}`,
        template: "src/components/pages/team/member/Member",
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
        template: "src/components/pages/news/index/Index"
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
          template: "src/components/pages/news/post/Post",
          getData: () => ({
            post
          })
        }))
      })
    }),
    {
      path: "/contact",
      template: "src/components/pages/contact/Contact",
      getData: () => ({
        contact
      })
    },
    {
      path: "/disclosures",
      template: "src/components/pages/disclosures/Disclosures",
      getData: () => ({
        disclosures
      })
    }
  ];
};

export default createRoutes;
