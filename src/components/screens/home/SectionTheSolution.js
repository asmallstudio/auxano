import React from "react";

import styles from "./sectionTheSolution.scss";

class SectionTheSolution extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <a class="anchor" id="the-solution" />
          <div className={styles.row}>
            <div className="col-xs-12">
              <h4>The Solution</h4>
              <h1>Reliable, Low-Cost Transportation</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionTheSolution;
