import React from "react";
import { withRouteData, Head } from "react-static";
import { pageChange } from "../../../lib/utils/pageChange";
import { getFullPageTitle } from "../../../lib/utils/copy";

import styles from "./aboutUs.scss";
import CallToActionLink from "../../ui/callToActionLink/CallToActionLink";
import FullWidthSectionActionLink from "../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "../../ui/subscribeSection/SubscribeSection";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    pageChange();
  }

  render() {
    const { aboutUs } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(aboutUs.pageTitle)}</title>
        </Head>
        <section
          className={`container--fluid ${styles.heroContainer}`}
          style={{ backgroundImage: `url(${aboutUs.hero.image})` }}
        >
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
          <img
            className={`row ${styles.imageDivider}`}
            src={aboutUs.imageDivider.src}
            alt={aboutUs.imageDivider.alt}
          />
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
            </div>
            <div className={`col-xs-12 col-lg-6 ${styles.infoSectionColImage}`}>
              <img
                className={styles.infoSectionImage}
                src={aboutUs.infoSection1.image.src}
                alt={aboutUs.infoSection1.image.alt}
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
