import React from "react";

import styles from "./fullWidthSectionText.scss";

class fullWidthSectionText extends React.Component {
  render() {
    const { text, className = "" } = this.props;
    return (
      <section className={`container--fluid ${styles.container} ${className}`}>
        <div className={`container ${styles.textContainer}`}>
          <p className={`style-as-h2 ${styles.text}`}>{text}</p>
        </div>
      </section>
    );
  }
}

export default fullWidthSectionText;
