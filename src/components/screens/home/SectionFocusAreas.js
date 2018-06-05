import React from "react";

import styles from "./sectionFocusAreas.scss";

class SectionFocusAreas extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <a className="anchor" id="the-solution" />
          <div className={styles.row}>
            <div className="col-xs-12 col-md-7">
              <h1>Focus Areas</h1>
            </div>
            <div className="col-xs-12 col-md-5">
              <div className={styles.iconContainer}>
                <img src="/uploads/food.svg" />
                <img src="/uploads/jobs.svg" />
                <img src="/uploads/healthcare.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionFocusAreas;
