import React from "react";
import { withRouteData, Link } from "react-static";

import PrimaryButton from "../../ui/primaryButton/PrimaryButton";
import OneThirdColumn from "./OneThirdColumn";
import styles from "./home.scss";

class Home extends React.Component {
  render() {
    return (
      <div>
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
          <div className={`${styles.pullquote} row col-xs-12 col-md-8`}>
            <p>{this.props.home.pullquote.text}</p>
          </div>
          <div className={`${styles.threecols} row`}>
            <OneThirdColumn data={this.props.home.threecol.col1} />
            <OneThirdColumn data={this.props.home.threecol.col2} />
            <OneThirdColumn data={this.props.home.threecol.col3} />
          </div>
        </div>
        <div className={`container--fluid ${styles.learnMoreContainer}`}>
          <div className={`row ${styles.learnMoreRow}`}>
            <div className="col-xs-12">
              <Link to="#" className={styles.learnMoreLink}>
                Learn more about us
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouteData(Home);
