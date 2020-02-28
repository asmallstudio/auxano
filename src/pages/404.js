import React from "react";
import { withSiteData, Head } from "react-static";
import { AmbiLink } from "@asmallstudio/components";
import { getFullPageTitle } from "@asmallstudio/utilities";
import { pageChange } from "../lib/utils/pageChange";
import constants from "../lib/constants.json";

import styles from "./404.scss";

const PageNotFound = ({ siteData }) => {
  React.useEffect(() => {
    pageChange();
  });

  return (
    <>
      <Head>
        <title>
          {getFullPageTitle("Page not found", constants.siteMeta.title)}
        </title>
        <meta name="description" content={siteData.siteDescription} />
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1 className={styles.title}>That page cannot be found.</h1>
            <p className={styles.explainer}>
              Try going <AmbiLink to="/">home</AmbiLink>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default withSiteData(PageNotFound);
