import React from "react";

import styles from "./layoutGuide.scss";

export default () => (
  <div className={styles.container}>
    <div className={styles.row}>
      <div className="col-md-4 col-lg-6" style={{ backgroundColor: "orange " }}>
        <h2>Layout Guide</h2>
      </div>
    </div>
  </div>
);
