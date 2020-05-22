import React from "react";

import styles from "./defaultButton.module.scss";

export default function DefaultButton({ children, className = "", ...restProps }) {
  return (
    <button className={`${styles.button} ${className}`} {...restProps}>
      {children}
    </button>
  );
}
