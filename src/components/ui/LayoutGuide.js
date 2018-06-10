import React from "react";

import styles from "./layoutGuide.scss";

export default () => (
  <div className={styles.container}>
    <div className={styles.row}>
      <div className="col-xs-4 col-lg-6 col-xs-offset-1 col-lg-offset-0">
        <h2>Layout Guide</h2>
      </div>
    </div>
  </div>
);
