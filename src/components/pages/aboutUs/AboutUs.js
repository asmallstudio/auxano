import React from "react";
import { withRouteData, Head } from "react-static";
import { getFullPageTitle } from "../../../lib/utils/copy";

import styles from "./aboutUs.scss";
import CallToActionLink from "../../ui/callToActionLink/CallToActionLink";
import FullWidthSectionActionLink from "../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "../../ui/subscribeSection/SubscribeSection";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { aboutUs } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(aboutUs.pageTitle)}</title>
        </Head>
        <section className={`container--fluid ${styles.heroContainer}`}>
          <div className={`container`}>
            <div className="row">
              <div className={`col-xs-12 col-md-6 ${styles.heroTextContainer}`}>
                <h1>{aboutUs.hero.title}</h1>
                <p>{aboutUs.hero.subtitle}</p>
              </div>
            </div>
          </div>
        </section>
        <section className={`container--fluid`}>
          <div className={`row ${styles.fullWidthImage1Row}`} />
        </section>
        <section className="container">
          <div className={`row ${styles.infoSection1Row}`}>
            <div
              className={`col-xs-12 col-md-8 col-lg-5 col-lg-offset-1 ${
                styles.infoSection1ColText
              }`}
            >
              <h2>{aboutUs.infoSection1.heading}</h2>
              <p>{aboutUs.infoSection1.text}</p>
              <CallToActionLink to={aboutUs.infoSection1.link}>
                CTA Button
              </CallToActionLink>
            </div>
            <div className={`col-xs-12 col-lg-6 ${styles.infoSectionColImage}`}>
              <img
                className={styles.infoSectionImage}
                src="https://via.placeholder.com/300x180"
              />
              <div className={styles.dingusDot} />
            </div>
          </div>
        </section>
        <FullWidthSectionActionLink
          linkText={aboutUs.actionBanner.text}
          to={aboutUs.actionBanner.link}
        />
        <SubscribeSection
          heading={aboutUs.subscribe.heading}
          text={aboutUs.subscribe.text}
        />
      </React.Fragment>
    );
  }
}

export default withRouteData(AboutUs);
