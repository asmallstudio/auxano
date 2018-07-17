import React from "react";

import styles from "./defaultButton.scss";

const DefaultButton = ({ children, backgroundColor, textColor, type }) => (
  <button
    type={type}
    className={styles.button}
    style={{
      backgroundColor: backgroundColor
    }}
  >
    <span className={styles.text} style={{ color: textColor }}>
      {children}
    </span>
  </button>
);

export default DefaultButton;
