import React from "react";

import styles from "./spacer.scss";

class Spacer extends React.Component {
  render() {
    const { height } = this.props;
    return <div style={{ height: `${height}px` }} />;
  }
}

export default Spacer;
