import React from "react";

import styles from "./fullWidthSectionActionLink.scss";
import AmbiLink from "../ambiLink/AmbiLink";
import LinkWithArrow from "../linkWithArrow/LinkWithArrow";

const FullWidthSectionActionLink = props => {
  const { linkText, to, className = "", ...restProps } = props;
  return (
    <section
      className={`container--fluid ${styles.container} ${className}`}
      {...restProps}
    >
      <AmbiLink to={to}>
        <div className={`row ${styles.row}`}>
          <div className="col-xs-12">
            <LinkWithArrow className={styles.link}>{linkText}</LinkWithArrow>
          </div>
        </div>
      </AmbiLink>
    </section>
  );
};

export default FullWidthSectionActionLink;
