import React from "react";
import { Link } from "react-static";

import styles from "./oneThirdColumn.scss";

class OneThirdColumn extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className={`${styles.col} col-xs-12 col-md-4`}>
        <div className={styles.colIcon} />
        <h2>{data.heading}</h2>
        <p>{data.text}</p>
        <Link to={data.link} className={styles.colLearnMore}>
          Learn More
        </Link>
      </div>
    );
  }
}

export default OneThirdColumn;
