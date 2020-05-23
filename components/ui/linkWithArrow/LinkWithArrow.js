import React from "react";
import { NextAmbiLink } from "@asmallstudio/components";

import styles from "./linkWithArrow.module.scss";

export default function LinkWithArrow({
  to,
  children,
  className = "",
  ...props
}) {
  if (to) {
    return (
      <NextAmbiLink href={to} className={`${styles.link} ${className}`} {...props}>
        {children}
      </NextAmbiLink>
    );
  }
  return <span className={`${styles.link} ${className}`} {...props}>{children}</span>;
}
