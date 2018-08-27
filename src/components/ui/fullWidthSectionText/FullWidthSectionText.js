import React from "react";
import Markdown from "react-markdown";

import styles from "./fullWidthSectionText.scss";

class fullWidthSectionText extends React.Component {
  render() {
    const { text, className = "" } = this.props;
    return (
      <section className={`container--fluid ${styles.container} ${className}`}>
        <div className={`container ${styles.textContainer}`}>
          <div className="row">
            <div className="col-xs-12">
              <Markdown source={text} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default fullWidthSectionText;
