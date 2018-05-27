import React from "react";

import styles from "./button.scss";

class Button extends React.Component {
  render() {
    const { text, backgroundColor, textColor } = this.props;
    return (
      <button className={styles.button} style={{ backgroundColor }}>
        <span className={styles.text} style={{ color: textColor }}>
          {text}
        </span>
      </button>
    );
  }
}

export default Button;
