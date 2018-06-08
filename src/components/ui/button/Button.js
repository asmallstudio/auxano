import React from "react";
import { Link } from "react-static";

import styles from "./button.scss";

class Button extends React.Component {
  render() {
    const { text, backgroundColor, textColor, to } = this.props;
    return (
      <Link to={to}>
        <button className={styles.button} style={{ backgroundColor }}>
          <span className={styles.text} style={{ color: textColor }}>
            {text}
          </span>
        </button>
      </Link>
    );
  }
}

export default Button;
