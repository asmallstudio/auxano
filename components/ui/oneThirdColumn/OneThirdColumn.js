import React from "react";
import { NextAmbiLink } from "@asmallstudio/components";

import LinkWithArrow from "../linkWithArrow/LinkWithArrow";
import styles from "./oneThirdColumn.module.scss";

export default function OneThirdColumn({ data, className = "" }) {
  return (
    <div className={`${styles.col} col-xs-12 col-md-4 ${className}`}>
      {typeof data.icon !== "undefined" && typeof data.link === "undefined" && (
        <img className={styles.colIcon} src={data.icon} alt="" />
      )}
      {typeof data.icon !== "undefined" && typeof data.link !== "undefined" && (
        <NextAmbiLink href={data.link}>
          <img className={styles.colIcon} src={data.icon} alt="" />
        </NextAmbiLink>
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
}
