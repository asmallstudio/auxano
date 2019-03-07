import React from "react";
import { AmbiLink } from "@asmallstudio/components";

import styles from "./linkWithArrow.scss";

const LinkWithArrow = ({ to, children, className = "" }) => {
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
