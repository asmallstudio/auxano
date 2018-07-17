import React from "react";
import { withRouteData } from "react-static";

import DesignGuide from "../../ui/guides/DesignGuide";
import DefaultButton from "../../ui/defaultButton/DefaultButton";
import styles from "./home.scss";

class Home extends React.Component {
  render() {
    return (
      <div>
        <section className="container">
          <div className="row">
            <div className={`col-xs-12 col-lg-6 ${styles.titleTextContainer}`}>
              <div>
                <h1 className={styles.heroTitle}>
                  Transcending wealth. Transforming lives.
                </h1>
                <p className={styles.heroSubTitle}>
                  {`We help clients transcend the traditional definition of wealth
                so it's used to build a legacy that transforms families,
                finances, and their future.`}
                  <DefaultButton>Cta Button</DefaultButton>
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-lg-6">
              <div className={styles.filler} />
            </div>
            <div className="col-xs-12">
              <h1>{this.props.home.hero.title}</h1>
              <h3>{this.props.home.hero.exampleText}</h3>
              <hr />
            </div>
          </div>
        </section>
        <DesignGuide />
      </div>
    );
  }
}

export default withRouteData(Home);
