import React from "react";
import { Link } from "react-static";
import { ParallaxBanner } from "react-scroll-parallax";

import styles from "./sectionHero.scss";
import AnchorLink from "../../ui/anchorLink/AnchorLink";

class SectionHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const {
      data: { title, image }
    } = this.props;
    const { width } = this.state;
    return (
      <div className={styles.heroContainer}>
        <ParallaxBanner
          disabled={width < 768}
          className={styles.parallaxBanner}
          layers={[
            {
              image: image,
              amount: 0.2,
              slowerScrollRate: true
            }
          ]}
        />
        <div className={styles.heroChildren}>
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
