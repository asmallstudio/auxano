import React from "react";
import { AmbiLink } from "@asmallstudio/components";

import styles from "./fullWidthSectionActionLink.scss";
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
    <AmbiLink to={to}>
      <div className={`row ${styles.row}`}>
        <div className="col-xs-12">
          <LinkWithArrow className={styles.link}>{linkText}</LinkWithArrow>
        </div>
      </div>
    </AmbiLink>
  </section>
);

export default FullWidthSectionActionLink;
