import React from "react";

import styles from "./card.scss";

class Card extends React.Component {
  render() {
    const { title, text } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <h3 className={styles.titleText}>{title}</h3>
          <p className={styles.infoText}>{text}</p>
        </div>
      </div>
    );
  }
}

export default Card;
