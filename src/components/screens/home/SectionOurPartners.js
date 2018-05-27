import React from "react";

import styles from "./sectionOurPartners.scss";

class SectionOurPartners extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container} id="our-mission">
          <div className={styles.row}>
            <div className="col-xs-12">
              <h4>Our Partners</h4>
              <h3>
                Transitus strives to make a positive impact in the areas of
                food, jobs, and healthcare through community partnerships.
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionOurPartners;
