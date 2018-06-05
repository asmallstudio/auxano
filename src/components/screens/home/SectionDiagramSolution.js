import React from "react";

import styles from "./sectionDiagramSolution.scss";

class SectionDiagramSolution extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <a className="anchor" id="diagram-solution" />
          <div className="row">
            <img src="/uploads/diagram-solution.svg" width="100%" />
          </div>
        </div>
      </div>
    );
  }
}

export default SectionDiagramSolution;
