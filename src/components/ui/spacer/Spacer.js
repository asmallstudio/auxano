import React from "react";

import styles from "./spacer.scss";

class Spacer extends React.Component {
  render() {
    const { height, className } = this.props;
    return (
      <div
        className={`${styles.clear} ${this.props.className}`}
        style={{ height: `${height}px` }}
      />
    );
  }
}

export default Spacer;
