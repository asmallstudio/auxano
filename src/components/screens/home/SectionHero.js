import React from "react";
import { Link } from "react-static";

import styles from "./sectionHero.scss";

class SectionHero extends React.Component {
  render() {
    return (
      <div>
        <div
          className={styles.container}
          style={{ backgroundImage: "url(/uploads/hero-image-bridge.jpg)" }}
        >
          <a class="anchor" id="hero" />
          <div className="row">
            <div className="col-xs-12">
              <h1 className={styles.heroHeader}>
                Getting people to places when it matters most...
              </h1>
              <Link to="#who-we-are">
                <div className={styles.scrollImageContainer}>
                  <img src="/scroll-down-arrow.svg" alt="scroll-down-arrow" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionHero;
