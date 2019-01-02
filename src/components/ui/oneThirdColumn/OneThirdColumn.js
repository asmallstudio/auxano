import React from "react";
import { Link } from "react-static";

import LinkWithArrow from "../linkWithArrow/LinkWithArrow";
import styles from "./oneThirdColumn.scss";

class OneThirdColumn extends React.Component {
  render() {
    const { data, className = "" } = this.props;
    return (
      <div className={`${styles.col} col-xs-12 col-md-4 ${className}`}>
        {typeof data.icon !== "undefined" &&
          typeof data.link === "undefined" && (
            <img className={styles.colIcon} src={data.icon} alt="" />
          )}
        {typeof data.icon !== "undefined" && typeof data.link !== "undefined" && (
          <Link to={data.link}>
            <img className={styles.colIcon} src={data.icon} alt="" />
          </Link>
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
}

export default OneThirdColumn;
