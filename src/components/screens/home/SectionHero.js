import React from "react";

import styles from "./sectionHero.scss";

class SectionHero extends React.Component {
  render() {
    return (
      <div>
        <div className={`container ${styles.container}`}>
          <div className="row">
            <div className="col-xs-12">
              <h1 className={styles["hero-header"]}>
                Getting people to places when it matters most...
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionHero;
