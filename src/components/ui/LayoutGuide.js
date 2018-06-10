import React from "react";

import styles from "./layoutGuide.scss";

export default () => (
  <div className={styles.container}>
    <div className={styles.row}>
      <div className="col-xs-20">
        <h1>Layout Guide</h1>
      </div>
      <div className="col-xs-20 col-sm-15 col-lg-10">
        <h3>xs 20; sm 15; lg 10;</h3>
      </div>

      <div className="col-xs-15 col-sm-offset-4">
        <h3>xs 15; sm offset 4</h3>
      </div>
    </div>
  </div>
);
