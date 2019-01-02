import React from "react";
import { Head } from "react-static";
import { Link } from "@reach/router";
import { withSiteAndRouteData } from "../../../../lib/utils/hoc";
import { pageChange } from "../../../../lib/utils/pageChange";
import { getFullPageTitle } from "../../../../lib/utils/copy";

import Markdown from "react-markdown";
import styles from "./post.scss";

class Post extends React.Component {
  componentDidMount() {
    pageChange();
  }

  render() {
    const { post, siteData } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(post.title)}</title>
          <meta name="description" content={siteData.siteDescription} />
        </Head>
        <div className={`container ${styles.articleContainer}`}>
          <div className="row">
            <div
              className={`col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 ${
                styles.articleListLinkContainer
              }`}
            >
              <Link
                to="/news"
                className={`style-as-h3 ${styles.articleListLink}`}
              >
                News & Resources
              </Link>
            </div>
            <article
              className={`col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 ${
                styles.newsArticle
              }`}
            >
              <h1>{post.title}</h1>
              <Markdown>{post.body}</Markdown>
            </article>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withSiteAndRouteData(Post);
