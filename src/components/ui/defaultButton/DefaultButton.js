import React from "react";

import styles from "./defaultButton.scss";

const DefaultButton = ({ children, className = "", ...restProps }) => (
  <button className={`${styles.button} ${className}`} {...restProps}>
    {children}
  </button>
);

export default DefaultButton;
