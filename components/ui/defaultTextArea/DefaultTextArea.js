import React from "react";

import styles from "./defaultTextArea.module.scss";

export default function DefaultTextArea({
  children,
  className = "",
  ...restProps
}) {
  return (
    <textarea
      rows="5"
      className={`${styles.textArea} ${className}`}
      {...restProps}
    />);
}
