import React from "react";
import { withRouteData } from "react-static";
import Carousel from "./Carousel";

import PrimaryButton from "../../ui/primaryButton/PrimaryButton";
import OneThirdColumn from "./OneThirdColumn";
import styles from "./home.scss";
import FullWidthSectionActionLink from "../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className={`col-xs-12 col-lg-6 ${styles.titleTextContainer}`}>
              <div>
                <h1 className={`${styles.heroTitle} vertSpacerSm`}>
                  {this.props.home.hero.title}
                </h1>
                <p className={`${styles.heroSubTitle} vertSpacerSm`}>
                  {this.props.home.hero.subtitle}
                </p>
                <PrimaryButton className={styles.button}>
                  CTA Button
                </PrimaryButton>
              </div>
            </div>
            <div className="col-xs-12 col-lg-6">
              <div className={styles.filler} />
            </div>
          </div>
        </div>
        <section className={`${styles.pullquote} row col-xs-12 col-md-8`}>
          <p>{this.props.home.pullquote.text}</p>
        </section>
        <section className={`${styles.threecols} row`}>
          <OneThirdColumn data={this.props.home.threecol.col1} />
          <OneThirdColumn data={this.props.home.threecol.col2} />
          <OneThirdColumn data={this.props.home.threecol.col3} />
        </section>
        <section>
          <Carousel className={styles.carousel} />
        </section>
        <FullWidthSectionActionLink
          linkText="Learn more about us"
          to={this.props.home.learnMore.link}
        />
      </React.Fragment>
    );
  }
}

export default withRouteData(Home);
