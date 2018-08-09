import React from "react";

import styles from "./defaultTextArea.scss";

class defaultTextArea extends React.Component {
  render() {
    const { className = "", children, ...restProps } = this.props;
    return (
      <textarea
        rows="5"
        className={`${styles.textArea} ${className}`}
        {...restProps}
      >
        {children}
      </textarea>
    );
  }
}

export default defaultTextArea;
