import React from "react";

import styles from "./bubbleWithSubheading.scss";
import Bubble from "../bubble/Bubble";

class BubbleWithSubheading extends React.Component {
  render() {
    const {
      innerText,
      bubbleColor,
      bubbleDiameter,
      textColor = "black",
      subheadingText,
      subheadingTextColor = "black"
    } = this.props;

    return (
      <div className={styles.container}>
        <Bubble
          innerText={innerText}
          bubbleColor={bubbleColor}
          bubbleDiameter={bubbleDiameter}
          textColor={textColor}
        />
        <h5
          style={{ color: subheadingTextColor }}
          className={styles.subheadingText}
        >
          {subheadingText}
        </h5>
      </div>
    );
  }
}

export default BubbleWithSubheading;
