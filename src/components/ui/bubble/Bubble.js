import React from "react";

import styles from "./bubble.scss";

class Bubble extends React.Component {
  render() {
    const {
      innerText,
      bubbleColor,
      bubbleDiameter,
      textColor = "black"
    } = this.props;

    return (
      <div
        style={{
          height: `${bubbleDiameter}px`,
          width: `${bubbleDiameter}px`,
          backgroundColor: bubbleColor
        }}
        className={styles.container}
      >
        <span
          className={styles.text}
          style={{ color: textColor, fontSize: bubbleDiameter / 3.5 }}
        >
          {innerText}
        </span>
      </div>
    );
  }
}

export default Bubble;
