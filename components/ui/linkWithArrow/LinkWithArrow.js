import React from "react";
import Link from "next/link";

import styles from "./linkWithArrow.module.scss";

export default function LinkWithArrow({
  to,
  children,
  className = "",
  ...props
}) {
  if (to) {
    return (
      <Link href={to} className={`${styles.link} ${className}`} {...props}>
        {children}
      </Link>
    );
  }
  return <span className={`${styles.link} ${className}`} {...props}>{children}</span>;
}
