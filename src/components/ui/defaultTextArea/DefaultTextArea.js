import React from "react";

import styles from "./defaultTextArea.scss";

class defaultTextArea extends React.Component {
  render() {
    const { className = "", ...restProps } = this.props;
    return (
      <textarea
        rows="5"
        className={`${styles.textArea} ${className}`}
        {...restProps}
      />
    );
  }
}

export default defaultTextArea;
