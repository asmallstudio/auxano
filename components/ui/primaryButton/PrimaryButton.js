import React from "react";

import DefaultButton from "../defaultButton/DefaultButton";
import styles from "./primaryButton.module.scss";

/**
 * Extends the DefaultButton component
 */
export default function PrimaryButton({
  children,
  className = "",
  ...restProps
}) {
  return (
    <DefaultButton className={`${styles.button} ${className}`} {...restProps}>
      {children}
    </DefaultButton>
  );
}
