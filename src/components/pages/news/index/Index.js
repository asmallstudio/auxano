import React from "react";
import { RouteData, Link, Head } from "react-static";
import { getFullPageTitle } from "../../../../lib/utils/copy";
import { pageChange } from "../../../../lib/utils/pageChange";

// import styles from "./index.scss";

const PaginationLink = ({ ...rest }) => <Link {...rest} />;

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    pageChange();
  }

  render() {
    return (
      <RouteData
        render={({ posts, currentPage, totalPages }) => (
          <React.Fragment>
            <Head>
              <title>{getFullPageTitle("News")}</title>
            </Head>
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <h1 className="style-as-h3">News & Resources</h1>
                  <ul>
                    {posts.map(post => (
                      <li key={post.id}>
                        <Link to={`/news/${post.slug}/`}>{post.title}</Link>
                      </li>
                    ))}
                  </ul>

                  {totalPages > 1 && (
                    <div>
                      <h3>Pages</h3>
                      {Array.from(new Array(totalPages), (d, i) => i).map(
                        page => {
                          const nextPage = page + 1;
                          return (
                            <span key={nextPage}>
                              <PaginationLink
                                to={`/news/page/${nextPage}`}
                                isCurrent={nextPage === currentPage}
                              >
                                {nextPage}
                              </PaginationLink>
                            </span>
                          );
                        }
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      />
    );
  }
}

export default Index;
