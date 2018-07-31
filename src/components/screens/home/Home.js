import React from "react";
import { withRouteData } from "react-static";
import AuxanoCarousel from "./Carousel";

import PrimaryButton from "../../ui/primaryButton/PrimaryButton";
import CallToActionLink from "../../ui/callToActionLink/CallToActionLink";
import OneThirdColumn from "./OneThirdColumn";
import styles from "./home.scss";
import FullWidthSectionActionLink from "../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import DefaultInput from "../../ui/defaultInput/DefaultInput";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={`container--fluid ${styles.heroContainer}`}>
          <div className={`container`}>
            <div className="row">
              <div className={`col-xs-12 col-md-6 ${styles.heroTextContainer}`}>
                <h1>{this.props.home.hero.title}</h1>
                <p>{this.props.home.hero.subtitle}</p>
                <CallToActionLink to={this.props.home.hero.link}>
                  CTA Button
                </CallToActionLink>
              </div>
            </div>
          </div>
        </div>
        <div className={`container`}>
          <section className={`${styles.pullquote} row`}>
            <div className="col-xs-12 col-md-8">
              <p className="style-as-h2">{this.props.home.pullquote.text}</p>
            </div>
          </section>
          <section className={`${styles.threecols} row`}>
            <OneThirdColumn data={this.props.home.threecol.col1} />
            <OneThirdColumn data={this.props.home.threecol.col2} />
            <OneThirdColumn data={this.props.home.threecol.col3} />
          </section>
          <section>
            <AuxanoCarousel />
          </section>
        </div>
        <FullWidthSectionActionLink
          linkText="Learn more about us"
          to={this.props.home.learnMore.link}
        />
        <div className="container">
          <div className={`row ${styles.subscribeRow}`}>
            <div
              className={`col-xs-12 col-lg-5 ${styles.subscribeDescription}`}
            >
              <h2 className="style-as-h3">
                {this.props.home.subscribe.heading}
              </h2>
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
                autoComplete="email"
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
