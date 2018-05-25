import React from "react";

import styles from "./sectionWhoWeAre.scss";

class SectionWhoWeAre extends React.Component {
  render() {
    return (
      <div>
        {/* TODO: call global classes "global-container" */}
        <div className={`container ${styles.container}`}>
          <div className={`row ${styles.row}`}>
            <div className="col-xs-12">
              <h4>Who We Are</h4>
              <h3>
                A student-created, Ohio non-profit focused on reliable, low-cost
                mobility options for the underserved.
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionWhoWeAre;
