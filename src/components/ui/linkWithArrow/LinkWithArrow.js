import React from "react";

import styles from "./linkWithArrow.scss";
import AmbiLink from "../ambiLink/AmbiLink";

const LinkWithArrow = props => {
  const { to, children, className = "" } = props;
  if (to) {
    return (
      <AmbiLink to={to} className={`${styles.link} ${className}`}>
        {children}
      </AmbiLink>
    );
  }
  return <span className={`${styles.link} ${className}`}>{children}</span>;
};

export default LinkWithArrow;
