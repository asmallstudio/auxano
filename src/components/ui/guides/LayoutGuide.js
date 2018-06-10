import React from "react";

import styles from "./layoutGuide.scss";

export default () => (
  <div className={styles.container}>
    <div className={styles.row} id="layout-row">
      <div className="col-xs-20">
        <h1>Layout Guide</h1>
      </div>
      <div
        className="col-xs-20 col-sm-15 col-md-12 col-lg-10 col-xl-5"
        id="layout-test-a"
      >
        <h3>xs 20; sm 15; md 12; lg 10; xl 5</h3>
      </div>
    </div>
    <div className={styles.row} id="layout-row-b">
      <div
        className="col-xs-1 col-xs-offset-1 col-sm-offset-2 col-md-offset-3 col-lg-offset-4 col-xl-offset-5"
        id="layout-test-b"
      >
        <h3>hi</h3>
      </div>
    </div>
    <div className={styles.row} id="layout-row-c">
      <div className="col-xs-20 hidden-md-down hidden-lg-up" id="layout-test-c">
        <h3>hi</h3>
      </div>
    </div>
  </div>
);
