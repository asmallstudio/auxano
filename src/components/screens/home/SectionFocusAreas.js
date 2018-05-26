import React from "react";

import styles from "./sectionFocusAreas.scss";

class SectionFocusAreas extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container} id="the-solution">
          <div className={styles.row}>
            <div className="col-xs-6">
              <h1>Focus Areas</h1>
            </div>
            <div className="col-xs-6">
              <div className={styles.iconContainer}>
                <img src="/uploads/food.svg" height="91.9px" />
                <img src="/uploads/jobs.svg" height="80.4px" />
                <img src="/uploads/healthcare.svg" height="80.4px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionFocusAreas;
