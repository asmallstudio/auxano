import React from "react";

import styles from "./defaultInput.module.scss";

export default function DefaultInput({
  children,
  className = "",
  ...restProps
}) {
  return <input className={`${styles.input} ${className}`} {...restProps} />;
}
