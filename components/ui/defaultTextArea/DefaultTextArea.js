import React from "react";

import styles from "./defaultTextArea.module.scss";

export default function DefaultTextArea({
  children,
  className = "",
  ...props
}) {
  return (
    <textarea
      rows="5"
      className={`${styles.textArea} ${className}`.trim()}
      {...props}
    >
      {children}
    </textarea>
  );
}
