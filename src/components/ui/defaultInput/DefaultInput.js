import React from "react";

import styles from "./defaultInput.scss";

class DefaultInput extends React.Component {
  render() {
    const { className = "", ...restProps } = this.props;
    return <input className={`${styles.input} ${className}`} {...restProps} />;
  }
}

export default DefaultInput;
