import React from "react";
import { withRouteData, Head } from "react-static";
import { pageChange } from "../../../lib/utils/pageChange";
import {
  getFullPageTitle,
  pickFirstAvailableString
} from "../../../lib/utils/copy";

import CallToActionLink from "../../ui/callToActionLink/CallToActionLink";
import FullWidthSectionText from "../../ui/fullWidthSectionText/FullWidthSectionText";
import FullWidthSectionActionLink from "../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "../../ui/subscribeSection/SubscribeSection";

import styles from "./aboutUs.scss";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeOrg: 0
    };
  }

  _updateListState = i => {
    return this.setState({
      activeOrg: i
    });
  };

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
        <section className={`container--fluid ${styles.heroContainer} dg-hero`}>
          <div
            className={`${styles.heroImageContainer} ${styles.dingusDotHero}`}
          >
            <img src={aboutUs.hero.image} className={styles.heroImage} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 col-md-6 ${styles.heroTextContainer}`}>
                <h1>{aboutUs.hero.title}</h1>
                <p>{aboutUs.hero.subtitle}</p>
                <CallToActionLink to={aboutUs.hero.ctaLink}>
                  {aboutUs.hero.ctaText}
                </CallToActionLink>
              </div>
            </div>
          </div>
        </section>
        <FullWidthSectionText text={aboutUs.textSection} />
        <section className="container dg-infoSection">
          <div className={`row ${styles.infoSectionRow}`}>
            <div
              className={`col-xs-12 col-md-6 col-lg-5 ${
                styles.infoSectionColImage
              }`}
            >
              <div
                className={`${styles.imgContainer} ${
                  styles.dingusDotRelative
                } ${styles.dingusDot}`}
              >
                <img
                  className={`${styles.infoSectionImage}`}
                  src={aboutUs.infoSection.image.src}
                  alt={aboutUs.infoSection.image.alt}
                />
              </div>
            </div>
            <div className="col-lg-1 hidden-lg-down" />
            <div className={`col-xs-12 col-md-6 ${styles.infoSectionColText}`}>
              <h2>{aboutUs.infoSection.heading}</h2>
              <p>{aboutUs.infoSection.text}</p>
              <ul className={styles.communityOrgs}>
                {aboutUs.infoSection.items.map((item, i) => (
                  <li className={`key-${i}`} key={i}>
                    <img
                      src={item.logo}
                      alt=""
                      className={
                        i === this.state.activeOrg ? styles.activeOrg : null
                      }
                      onClick={() => this._updateListState(i)}
                    />
                    {i === this.state.activeOrg && (
                      <div className={styles.itemText}>
                        <div className={styles.itemName}>{item.name}</div>
                        <p className={styles.itemDesc}>{item.desc}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <FullWidthSectionActionLink
          linkText={pickFirstAvailableString(
            aboutUs.actionBanner.text,
            globalData.actionBanner.text
          )}
          to={pickFirstAvailableString(
            aboutUs.actionBanner.link,
            globalData.actionBanner.link
          )}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={pickFirstAvailableString(
            aboutUs.subscribe.heading,
            globalData.subscribe.heading
          )}
          text={pickFirstAvailableString(
            aboutUs.subscribe.text,
            globalData.subscribe.text
          )}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withRouteData(AboutUs);
