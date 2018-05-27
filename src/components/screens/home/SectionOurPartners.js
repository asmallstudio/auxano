import React from "react";

import styles from "./sectionOurPartners.scss";
import theme from "../../../lib/theme";
import Button from "../../ui/button/Button";

class SectionOurPartners extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container} id="our-partners">
          <div className={styles.row}>
            <div className="col-xs-12">
              <h4>Our Partners</h4>
              <h3>
                Transitus strives to make a positive impact in the areas of
                food, jobs, and healthcare through community partnerships.
              </h3>
              <div className={styles.partnerImage}>
                <img src="/uploads/partner-logos.jpg" width="100%" />
              </div>
              <Button
                text="Become a Partner"
                backgroundColor={theme.darkOrange}
                textColor="white"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionOurPartners;
