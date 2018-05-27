import React from "react";

import styles from "./sectionWhatWeDo.scss";

class SectionWhatWeDo extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container} id="what-we-do">
          <div className={styles.row}>
            <div className="col-xs-12">
              <h4>What We Do</h4>
              <h3>
                Transitus provides a unified platform giving underserved people
                access to food, jobs, and healthcare through a seamless
                transportation network.
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionWhatWeDo;
