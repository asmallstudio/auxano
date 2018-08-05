import React from "react";
import { withRouteData } from "react-static";
import AuxanoCarousel from "./Carousel";

import CallToActionLink from "../../ui/callToActionLink/CallToActionLink";
import OneThirdColumn from "./OneThirdColumn";
import styles from "./home.scss";
import FullWidthSectionActionLink from "../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "../../ui/subscribeSection/SubscribeSection";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={`container--fluid ${styles.heroContainer}`}>
          <div className={`container`}>
            <div className="row">
              <div
                className={`col-xs-12 col-md-6 ${
                  styles.heroTextContainer
                } dg-hero`}
              >
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
            <div className="col-xs-12 col-md-8 dg-pullquote">
              <p className="style-as-h2">{this.props.home.pullquote.text}</p>
            </div>
          </section>
          <section className={`${styles.threecols} row dg-threecol`}>
            <OneThirdColumn
              data={this.props.home.threecol.col1}
              className="dg-col1"
            />
            <OneThirdColumn
              data={this.props.home.threecol.col2}
              className="dg-col2"
            />
            <OneThirdColumn
              data={this.props.home.threecol.col3}
              className="dg-col3"
            />
          </section>
          <section>
            <AuxanoCarousel />
          </section>
        </div>
        <FullWidthSectionActionLink
          linkText="Learn more about us"
          to={this.props.home.learnMore.link}
          className="dg-learnMore"
        />
        <SubscribeSection
          heading={this.props.home.subscribe.heading}
          text={this.props.home.subscribe.text}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withRouteData(Home);
