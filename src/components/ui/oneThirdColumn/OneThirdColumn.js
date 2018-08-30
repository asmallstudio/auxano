import React from "react";

import LinkWithArrow from "../linkWithArrow/LinkWithArrow";
import styles from "./oneThirdColumn.scss";

class OneThirdColumn extends React.Component {
  render() {
    const { data, className = "" } = this.props;
    return (
      <div className={`${styles.col} col-xs-12 col-md-4 ${className}`}>
        <img className={styles.colIcon} src={data.icon} alt="" />
        <h2>{data.heading}</h2>
        <p>{data.text}</p>
        <LinkWithArrow to={data.link} className={styles.colLearnMore}>
          Learn More
        </LinkWithArrow>
      </div>
    );
  }
}

export default OneThirdColumn;
