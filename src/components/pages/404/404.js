import React from "react";
import { Link, Head } from "react-static";
import { getFullPageTitle } from "../../../lib/utils/copy";
import { pageChange } from "../../../lib/utils/pageChange";

import styles from "./404.scss";

class PageNotFound extends React.Component {
  componentDidMount() {
    pageChange();
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle("Page not found")}</title>
        </Head>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className={styles.title}>That page cannot be found.</h1>
              <p className={styles.explainer}>
                Try going <Link to="/">home</Link>.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageNotFound;
