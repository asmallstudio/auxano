import React from "react";
import Markdown from "react-markdown";

import styles from "./fullWidthSectionText.module.scss";

export default function FullWidthSectionText({
  text,
  className = "",
  ...restProps
}) {
  return (
    <section
      className={`container--fluid ${styles.container} ${className}`}
      {...restProps}
    >
      <div className={`container ${styles.textContainer}`}>
        <div className="row">
          <div className="col-xs-12">
            {/* eslint-disable-next-line react/no-children-prop */}
            <Markdown children={text} />
          </div>
        </div>
      </div>
    </section>
  );
}
