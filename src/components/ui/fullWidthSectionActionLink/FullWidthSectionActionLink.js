import React from "react";

import styles from "./fullWidthSectionActionLink.scss";
import LinkWithArrow from "../linkWithArrow/LinkWithArrow";

class FullWidthSectionActionLink extends React.Component {
  render() {
    const { linkText, to } = this.props;
    return (
      <div className={`container--fluid ${styles.container}`}>
        <div className={`row ${styles.row}`}>
          <div className="col-xs-12">
            <LinkWithArrow to={to} className={styles.link}>
              {linkText}
            </LinkWithArrow>
          </div>
        </div>
      </div>
    );
  }
}

export default FullWidthSectionActionLink;
