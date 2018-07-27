import React from "react";
import { withRouteData } from "react-static";

import styles from "./aboutUs.scss";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { aboutUs } = this.props;

    return (
      <React.Fragment>
        <div className={`container--fluid ${styles.heroContainer}`}>
          <div className={`container`}>
            <div className="row">
              <div className={`col-xs-12 col-md-6 ${styles.heroTextContainer}`}>
                <h1>{aboutUs.hero.title}</h1>
                <p>{aboutUs.hero.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouteData(AboutUs);
