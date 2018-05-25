import React from "react";

import styles from "./sectionHero.scss";

class SectionHero extends React.Component {
  render() {
    return (
      <div>
        <div
          className={styles.container}
          style={{ backgroundImage: "url(/uploads/hero-image-bridge.jpg)" }}
        >
          <div className="row">
            <div className="col-xs-12">
              <h1 className={styles.heroHeader}>
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
