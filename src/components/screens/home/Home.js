import React from "react";
import { withRouteData } from "react-static";
import Flickity from "react-flickity-component";

import PrimaryButton from "../../ui/primaryButton/PrimaryButton";
import OneThirdColumn from "./OneThirdColumn";
import styles from "./home.scss";
import FullWidthSectionActionLink from "../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import DefaultInput from "../../ui/defaultInput/DefaultInput";

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
                <PrimaryButton>CTA BUTTON</PrimaryButton>
              </div>
            </div>
            <div className="col-xs-12 col-lg-6">
              <div className={styles.filler} />
            </div>
          </div>
        </div>
        <section>
          <Flickity className={styles.carousel} elementType={"ul"}>
            <li className={styles.jsSlide}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <div className={styles.quoteAuthor}>John Smith</div>
            </li>
            <li className={styles.jsSlide}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <div className={styles.quoteAuthor}>Jane Doe</div>
            </li>
            <li className={styles.jsSlide}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <div className={styles.quoteAuthor}>J.D.</div>
            </li>
          </Flickity>
        </section>
        <FullWidthSectionActionLink
          linkText="Learn more about us"
          to={this.props.home.learnMore.link}
        />
        <div className="container">
          <div className={`row ${styles.subscribeRow}`}>
            <div
              className={`col-xs-12 col-lg-5 ${styles.subscribeDescription}`}
            >
              <h3>{this.props.home.subscribe.heading}</h3>
              <p>{this.props.home.subscribe.text}</p>
            </div>
            <div
              className={`col-xs-12 col-md-10 col-md-offset-1 col-lg-6 col-lg-offset-1 ${
                styles.subscribeAction
              }`}
            >
              <DefaultInput
                placeholder="Email"
                type="email"
                aria-label="newsletter email"
                autocomplete="email"
                className={styles.subscribeInput}
              />
              <PrimaryButton className={`${styles.subscribeButton}`}>
                Subscribe
              </PrimaryButton>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouteData(Home);
