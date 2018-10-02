import React from "react";
import { Link, Head } from "react-static";
import { withSiteAndRouteData } from "../../../../lib/utils/hoc";
import { pageChange } from "../../../../lib/utils/pageChange";
import { getFullPageTitle } from "../../../../lib/utils/copy";

import LinkWithArrow from "../../../ui/linkWithArrow/LinkWithArrow";
import styles from "./index.scss";
import { formatDateStringToFromNow } from "../../../../lib/utils/copy";

const PaginationLink = ({ ...rest }) => <Link {...rest} />;

class Index extends React.Component {
  componentDidMount() {
    pageChange();
  }

  render() {
    const { posts, currentPage, totalPages } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle("News")}</title>
        </Head>
        <div className="container">
          <div className="row">
            <div className={`col-xs-12 ${styles.articleList}`}>
              <h1 className="style-as-h3">News & Resources</h1>
              <ul>
                {posts.map(post => (
                  <li key={post.slug} className={styles.indexArticle}>
                    <div className={styles.titleAndLinkContainer}>
                      <Link
                        to={`/news/${post.slug}/`}
                        className={styles.postTitle}
                      >
                        {post.title}
                      </Link>
                      <LinkWithArrow
                        to={`/news/${post.slug}/`}
                        className={styles.arrowLink}
                      >
                        Read more
                      </LinkWithArrow>
                    </div>
                    <div className={styles.metaInfoContainer}>
                      <p>{formatDateStringToFromNow(post.date)}</p>
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
