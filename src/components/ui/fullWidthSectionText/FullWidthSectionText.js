import React from "react";
import Markdown from "react-markdown";

import styles from "./fullWidthSectionText.scss";

const FullWidthSectionText = ({ text, className = "", ...restProps }) => (
  <section
    className={`container--fluid ${styles.container} ${className}`}
    {...restProps}
  >
    <div className={`container ${styles.textContainer}`}>
      <div className="row">
        <div className="col-xs-12">
          <Markdown source={text} />
        </div>
      </div>
    </div>
  </section>
);

export default FullWidthSectionText;
