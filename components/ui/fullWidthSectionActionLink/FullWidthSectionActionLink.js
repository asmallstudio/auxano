import React from "react";
import { NextAmbiLink } from "@asmallstudio/components";

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
    <NextAmbiLink href={to}>
      <div className={`row ${styles.row}`}>
        <div className="col-xs-12">
          <LinkWithArrow className={styles.link}>{linkText}</LinkWithArrow>
        </div>
      </div>
    </NextAmbiLink>
  </section>
);

export default FullWidthSectionActionLink;
