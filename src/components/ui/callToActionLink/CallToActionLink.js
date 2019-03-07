import React from "react";
import { AmbiLink } from "@asmallstudio/components";

import styles from "./callToActionLink.scss";

/**
 * Extends the Link component
 */
const CallToActionLink = ({ to, children, className = "", ...restProps }) => (
  <AmbiLink to={to} className={`${styles.link} ${className}`} {...restProps}>
    {children}
  </AmbiLink>
);

export default CallToActionLink;
