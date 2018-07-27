import React from "react";

import LinkWithArrow from "../../ui/linkWithArrow/LinkWithArrow";
import styles from "./oneThirdColumn.scss";

class OneThirdColumn extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className={`${styles.col} col-xs-12 col-md-4`}>
        <div className={styles.colIcon} />
        <h2 className="style-as-h3">{data.heading}</h2>
        <p>{data.text}</p>
        <LinkWithArrow to={data.link} className={styles.colLearnMore}>
          Learn More
        </LinkWithArrow>
      </div>
    );
  }
}

export default OneThirdColumn;
