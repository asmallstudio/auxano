import React from "react";
import { withRouteData } from "react-static";
import { Link } from "react-static";

import DesignGuide from "../../ui/guides/DesignGuide";
import PrimaryButton from "../../ui/primaryButton/PrimaryButton";
import styles from "./home.scss";

class Home extends React.Component {
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className={`col-xs-12 col-lg-6 ${styles.titleTextContainer}`}>
            <div>
              <h1 className={`${styles.heroTitle} vertSpacerSm`}>
                Transcending wealth. Transforming lives.
              </h1>
              <p className={`${styles.heroSubTitle} vertSpacerSm`}>
                {`We help clients transcend the traditional definition of wealth
                so it's used to build a legacy that transforms families,
                finances, and their future.`}
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
          <div className={`${styles.col} col-xs-12 col-md-4`}>
            <h2>{this.props.home.threecol.col1.heading}</h2>
            <p>{this.props.home.threecol.col1.text}</p>
            <Link
              to={this.props.home.threecol.col1.link}
              className={styles.colLearnMore}
            >
              Learn More
            </Link>
          </div>
          <div className={`${styles.col} col-xs-12 col-md-4`}>
            <h2>{this.props.home.threecol.col2.heading}</h2>
            <p>{this.props.home.threecol.col2.text}</p>
            <Link
              to={this.props.home.threecol.col2.link}
              className={styles.colLearnMore}
            >
              Learn More
            </Link>
          </div>
          <div className={`${styles.col} col-xs-12 col-md-4`}>
            <h2>{this.props.home.threecol.col3.heading}</h2>
            <p>{this.props.home.threecol.col3.text}</p>
            <Link
              to={this.props.home.threecol.col3.link}
              className={styles.colLearnMore}
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="col-xs-12">
          <h1>{this.props.home.hero.title}</h1>
          <h3>{this.props.home.hero.exampleText}</h3>
          <hr />
        </div>
        <DesignGuide />
      </section>
    );
  }
}

export default withRouteData(Home);
