import React from "react";
import { RouteData, Head } from "react-static";
import { pageChange } from "../../../../lib/utils/pageChange";
import { getFullPageTitle } from "../../../../lib/utils/copy";

// import styles from "./post.scss";

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    pageChange();
  }

  render() {
    return (
      <RouteData
        render={({ post }) => (
          <React.Fragment>
            <Head>
              <title>{getFullPageTitle(post.title)}</title>
            </Head>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      />
    );
  }
}

export default Post;
