import React from "react";

import styles from "./sectionTheProblem.scss";

class SectionTheProblem extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className="col-xs-12">
              <h4>The Problem</h4>
              <h3>
                Current transportation system is fragmented and unreliable,
                preventing underserved people from getting to the places that
                matter.
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionTheProblem;
