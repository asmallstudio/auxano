import React from "react";

import styles from "./bubble.scss";

class Bubble extends React.Component {
  render() {
    const { innerText, bubbleColor, bubbleDiameter, bubbleStyle } = this.props;

    return (
      <div
        style={{
          backgroundColor: bubbleColor
        }}
        className={`${styles.container} ${bubbleStyle}`}
      >
        <span className={styles.text}>{innerText}</span>
      </div>
    );
  }
}

export default Bubble;
