import React from "react";
import { Head } from "react-static";
import {
  getFullPageTitle,
  pickFirstAvailableString
} from "@asmallstudio/utilities";
import { withSiteAndRouteData } from "../../../lib/utils/hoc";
import { pageChange } from "../../../lib/utils/pageChange";

import Markdown from "react-markdown";
import styles from "./disclosures.scss";

class Disclosures extends React.Component {
  componentDidMount() {
    pageChange();
  }

  render() {
    const { disclosures, siteData } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(disclosures.pageTitle)}</title>
          <meta
            name="description"
            content={pickFirstAvailableString(
              disclosures.pageDescription,
              siteData.siteDescription
            )}
          />
        </Head>
        <div className={`container ${styles.articleContainer}`}>
          <div className="row">
            <article className="col-xs-12">
              <h1 className={styles.articleTitle}>{disclosures.title}</h1>
              <div className={styles.articleContent}>
                <Markdown>{disclosures.content}</Markdown>
              </div>
            </article>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withSiteAndRouteData(Disclosures);
