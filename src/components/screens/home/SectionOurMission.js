import React from "react";

import styles from "./sectionOurMission.scss";

class SectionOurMission extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container} id="our-mission">
          <div className={styles.row}>
            <div className="col-xs-12">
              <h4>Our Mission</h4>
              <h3>
                To provide programs and platforms for smart mobility options
                supporting the transportation of goods, people, and services
                into and out of underserved areas, improving the quality of life
                for at-risk populations.
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionOurMission;
