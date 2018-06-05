import React from "react";
import { Link } from "react-static";

import styles from "./button.scss";

class Button extends React.Component {
  render() {
    const { text, backgroundColor, textColor, to } = this.props;
    return (
      <button className={styles.button} style={{ backgroundColor }}>
        <Link to={to}>
          <span className={styles.text} style={{ color: textColor }}>
            {text}
          </span>
        </Link>
      </button>
    );
  }
}

export default Button;
