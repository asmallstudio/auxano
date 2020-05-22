import React from "react";
import { NextAmbiLink } from "@asmallstudio/components";

import styles from "./linkWithArrow.module.scss";

export default function LinkWithArrow({
  to,
  children,
  as = false,
  className = "",
}) {
  if (to) {
    return (
      <NextAmbiLink href={to} as={as} className={`${styles.link} ${className}`}>
        {children}
      </NextAmbiLink>
    );
  }
  return <span className={`${styles.link} ${className}`}>{children}</span>;
}
