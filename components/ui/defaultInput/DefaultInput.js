import React from "react";

import styles from "./defaultInput.module.scss";

export default function DefaultInput({ className = "", ...props }) {
  return <input className={`${styles.input} ${className}`.trim()} {...props} />;
}
