import React from "react";
import { Head } from "react-static";
import { pickFirstAvailableString } from "@asmallstudio/utilities";
import { withSiteAndRouteData } from "../../../lib/utils/hoc";
import { pageChange } from "../../../lib/utils/pageChange";

import styles from "./home.scss";
import CallToActionLink from "../../ui/callToActionLink/CallToActionLink";
import FullWidthSectionText from "../../ui/fullWidthSectionText/FullWidthSectionText";
import OneThirdColumn from "../../ui/oneThirdColumn/OneThirdColumn";
import FullWidthSectionActionLink from "../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "../../ui/subscribeSection/SubscribeSection";

class Home extends React.Component {
  componentDidMount() {
    pageChange();
  }

  render() {
    const { home, siteData } = this.props;

    return (
      <React.Fragment>
        <Head>
          <meta name="description" content={siteData.siteDescription} />
        </Head>
        <div className={`container--fluid ${styles.heroContainer}`}>
          <div
            className={`${styles.heroImageContainer} ${styles.dingusDotHero}`}
          >
            <img src={home.hero.image} className={styles.heroImage} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div
                className={`col-xs-12 col-md-6 ${styles.heroTextContainer} dg-hero`}
              >
                <h1>{home.hero.title}</h1>
                <p>{home.hero.subtitle}</p>
                <CallToActionLink to={home.hero.ctaLink}>
                  {home.hero.ctaText}
                </CallToActionLink>
              </div>
            </div>
          </div>
        </div>
        <FullWidthSectionText
          text={home.definition}
          className="dg-definition"
        />
        <FullWidthSectionText
          text={home.pullquote}
          className={`${styles.pullquote} dg-pullquote`}
        />
        <section className="container dg-services">
          <div className={`${styles.threecols} row`}>
            <OneThirdColumn data={home.callouts.item1} className="dg-item1" />
            <OneThirdColumn data={home.callouts.item2} className="dg-item2" />
            <OneThirdColumn data={home.callouts.item3} className="dg-item3" />
          </div>
        </section>
        <FullWidthSectionActionLink
          linkText={pickFirstAvailableString(
            home.actionBanner.text,
            siteData.actionBanner.text
          )}
          to={pickFirstAvailableString(
            home.actionBanner.link,
            siteData.actionBanner.link
          )}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={pickFirstAvailableString(
            home.subscribe.heading,
            siteData.subscribe.heading
          )}
          text={pickFirstAvailableString(
            home.subscribe.text,
            siteData.subscribe.text
          )}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withSiteAndRouteData(Home);
