import React from "react";

import styles from "./fullWidthSectionText.scss";

class fullWidthSectionText extends React.Component {
  render() {
    const { text, className = "" } = this.props;
    return (
      <section className={`container--fluid ${styles.container} ${className}`}>
        <div className={`container ${styles.textContainer}`}>
          <div className="row">
            <p className={`style-as-h2 col-xs-12 ${styles.text}`}>{text}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default fullWidthSectionText;
