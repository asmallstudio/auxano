import React from "react";
import Link from "next/link";

import styles from "./callToActionLink.module.scss";

/**
 * Extends the Link component
 */
const CallToActionLink = ({ to, children, className = "", ...restProps }) => (
  <Link
    href={to}
    className={`${styles.link} ${className}`}
    {...restProps}
  >
    {children}
  </Link>
);

export default CallToActionLink;
