import React from "react";
import { Head } from "react-static";
import { withSiteAndRouteData } from "../../../lib/utils/hoc";
import { pageChange } from "../../../lib/utils/pageChange";
import {
  getFullPageTitle,
  pickFirstAvailableString
} from "../../../lib/utils/copy";

import Markdown from "react-markdown";
import styles from "./privacyTerms.scss";

class PrivacyTerms extends React.Component {
  componentDidMount() {
    pageChange();
  }

  render() {
    const { privacyTerms, siteData } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(privacyTerms.pageTitle)}</title>
          <meta
            name="description"
            content={pickFirstAvailableString(
              privacyTerms.pageDescription,
              siteData.siteDescription
            )}
          />
        </Head>
        <div className={`container ${styles.articleContainer}`}>
          <div className="row">
            <article className="col-xs-12">
              <h1 className={styles.articleTitle}>{privacyTerms.title}</h1>
              <div className={styles.articleContent}>
                <Markdown>{privacyTerms.content}</Markdown>
              </div>
            </article>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withSiteAndRouteData(PrivacyTerms);
