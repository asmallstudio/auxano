import React from "react";
import { AmbiLink } from "@asmallstudio/components";

import LinkWithArrow from "../linkWithArrow/LinkWithArrow";
import styles from "./oneThirdColumn.scss";

const OneThirdColumn = ({ data, className = "" }) => (
  <div className={`${styles.col} col-xs-12 col-md-4 ${className}`}>
    {typeof data.icon !== "undefined" && typeof data.link === "undefined" && (
      <img className={styles.colIcon} src={data.icon} alt="" />
    )}
    {typeof data.icon !== "undefined" && typeof data.link !== "undefined" && (
      <AmbiLink to={data.link}>
        <img className={styles.colIcon} src={data.icon} alt="" />
      </AmbiLink>
    )}
    <h2>{data.heading}</h2>
    <p>{data.text}</p>
    {typeof data.link !== "undefined" && (
      <LinkWithArrow to={data.link} className={styles.colLearnMore}>
        Learn More
      </LinkWithArrow>
    )}
  </div>
);

export default OneThirdColumn;
