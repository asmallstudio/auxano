import React from "react";
import { Link } from "react-static";

import styles from "./fullWidthSectionActionLink.scss";
import LinkWithArrow from "../linkWithArrow/LinkWithArrow";

class FullWidthSectionActionLink extends React.Component {
  render() {
    const { linkText, to, className = "" } = this.props;
    return (
      <section className={`container--fluid ${styles.container} ${className}`}>
        <Link to={to}>
          <div className={`row ${styles.row}`}>
            <div className="col-xs-12">
              <LinkWithArrow className={styles.link}>{linkText}</LinkWithArrow>
            </div>
          </div>
        </Link>
      </section>
    );
  }
}

export default FullWidthSectionActionLink;
