import React from "react";

import styles from "./defaultButton.scss";

const DefaultButton = ({ children, className = "", ...restProps }) => (
  <button className={`${styles.button} ${className}`} {...restProps}>
    <span>{children}</span>
  </button>
);

export default DefaultButton;
