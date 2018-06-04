import React from "react";

import styles from "./sectionDiagramSolution.scss";

class SectionDiagramSolution extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container} id="diagram-solution">
          <img src="/uploads/diagram-solution.svg" width="100%" />
        </div>
      </div>
    );
  }
}

export default SectionDiagramSolution;
