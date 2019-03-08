import React from "react";
import { Head } from "react-static";
import {
  getFullPageTitle,
  formatRelativeDateString
} from "@asmallstudio/utilities";
import { AmbiLink } from "@asmallstudio/components";
import { withSiteAndRouteData } from "../../../../lib/utils/hoc";
import { pageChange } from "../../../../lib/utils/pageChange";
import constants from "../../../../lib/constants.json";

import LinkWithArrow from "../../../ui/linkWithArrow/LinkWithArrow";
import styles from "./index.scss";

const PaginationLink = ({ ...rest }) => <AmbiLink {...rest} />;

class Index extends React.Component {
  componentDidMount() {
    pageChange();
  }

  render() {
    const { posts, currentPage, totalPages, siteData } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle("News", constants.siteMeta.title)}</title>
          <meta name="description" content={siteData.siteDescription} />
        </Head>
        <div className="container">
          <div className="row">
            <div className={`col-xs-12 ${styles.articleList}`}>
              <h1 className="style-as-h3">News & Resources</h1>
              <ul>
                {posts.map(post => (
                  <li key={post.slug} className={styles.indexArticle}>
                    <div className={styles.titleAndLinkContainer}>
                      <AmbiLink
                        to={`/news/${post.slug}/`}
                        className={styles.postTitle}
                      >
                        {post.title}
                      </AmbiLink>
                      <LinkWithArrow
                        to={`/news/${post.slug}/`}
                        className={styles.arrowLink}
                      >
                        Read more
                      </LinkWithArrow>
                    </div>
                    <div className={styles.metaInfoContainer}>
                      <p>{formatRelativeDateString(post.date)}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {totalPages > 1 && (
                <nav className={styles.pagination}>
                  <h3>Pages</h3>
                  <ul className={styles.pageList}>
                    {Array.from(new Array(totalPages), (d, i) => i).map(
                      page => {
                        const nextPage = page + 1;
                        return (
                          <li key={nextPage}>
                            <PaginationLink
                              to={`/news/page/${nextPage}`}
                              isCurrent={nextPage === currentPage}
                            >
                              {nextPage}
                            </PaginationLink>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withSiteAndRouteData(Index);
