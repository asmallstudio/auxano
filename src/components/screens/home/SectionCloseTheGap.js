import React from "react";

import styles from "./sectionCloseTheGap.scss";

class SectionCloseTheGap extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <a class="anchor" id="lets-close-the-gap" />
          <div className={styles.row}>
            <div className="col-xs-12">
              <h1>Let’s close the gap!</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionCloseTheGap;
