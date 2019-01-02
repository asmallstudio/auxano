import React from "react";
import { Link } from "@reach/router";

import styles from "./callToActionLink.scss";

/**
 * Extends the Link component
 */
const CallToActionLink = ({ to, children, className = "", ...restProps }) => (
  <Link to={to} className={`${styles.link} ${className}`} {...restProps}>
    {children}
  </Link>
);

export default CallToActionLink;
