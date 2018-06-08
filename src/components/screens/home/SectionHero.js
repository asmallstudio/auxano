import React from "react";
import { Link } from "react-static";

import styles from "./sectionHero.scss";
import AnchorLink from "../../ui/anchorLink/AnchorLink";

class SectionHero extends React.Component {
  render() {
    const {
      data: { title, image }
    } = this.props;
    return (
      <div>
        <div
          className={styles.container}
          style={{ backgroundImage: `url(${image})` }}
        >
          <a className="anchor" id="hero" />
          <div className={styles.row}>
            <div className="col-xs-12">
              <h1 className={styles.heroHeader}>{title}</h1>
              <AnchorLink href="#who-we-are">
                <div className={styles.scrollImageContainer}>
                  <img src="/scroll-down-arrow.svg" alt="scroll-down-arrow" />
                </div>
              </AnchorLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionHero;
