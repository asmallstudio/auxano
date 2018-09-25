import React from "react";
import { RouteData, Head } from "react-static";
import { getFullPageTitle } from "../../../lib/utils/copy";
import { pageChange } from "../../../lib/utils/pageChange";

import Markdown from "react-markdown";
import styles from "./privacyTerms.scss";

class PrivacyTerms extends React.Component {
  componentDidMount() {
    pageChange();
  }

  render() {
    return (
      <RouteData
        render={({ privacyTerms }) => (
          <React.Fragment>
            <Head>
              <title>{getFullPageTitle(privacyTerms.pageTitle)}</title>
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
        )}
      />
    );
  }
}

export default PrivacyTerms;
