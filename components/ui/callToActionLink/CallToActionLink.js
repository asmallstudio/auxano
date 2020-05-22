import React from "react";
import { NextAmbiLink } from "@asmallstudio/components";

import styles from "./callToActionLink.module.scss";

/**
 * Extends the Link component
 */
const CallToActionLink = ({ to, children, className = "", ...restProps }) => (
  <NextAmbiLink href={to} className={`${styles.link} ${className}`} {...restProps}>
    {children}
  </NextAmbiLink>
);

export default CallToActionLink;
