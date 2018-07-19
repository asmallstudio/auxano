import React from "react";

import DefaultButton from "../defaultButton/DefaultButton";
import styles from "./primaryButton.scss";

/**
 * Extends the DefaultButton component
 */
const PrimaryButton = ({ children, className = "", ...restProps }) => (
  <DefaultButton className={`${styles.button} ${className}`} {...restProps}>
    {children}
  </DefaultButton>
);

export default PrimaryButton;
