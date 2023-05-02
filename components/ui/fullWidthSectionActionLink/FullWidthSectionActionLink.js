import React from "react";
import Link from "next/link";

import styles from "./fullWidthSectionActionLink.module.scss";
import LinkWithArrow from "../linkWithArrow/LinkWithArrow";

const FullWidthSectionActionLink = ({
  linkText,
  to,
  className = "",
  ...restProps
}) => (
  <section
    className={`container--fluid ${styles.container} ${className}`}
    {...restProps}
  >
    <Link href={to}>
      <div className={`row ${styles.row}`}>
        <div className="col-xs-12">
          <LinkWithArrow className={styles.link}>{linkText}</LinkWithArrow>
        </div>
      </div>
    </Link>
  </section>
);

export default FullWidthSectionActionLink;
