import React from "react";
import { Head, Link } from "react-static";
import { withSiteAndRouteData } from "../../../../lib/utils/hoc";
import { pageChange } from "../../../../lib/utils/pageChange";
import {
  getFullPageTitle,
  pickFirstAvailableString
} from "../../../../lib/utils/copy";

import styles from "./taxPlanning.scss";
import FullWidthSectionActionLink from "../../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "../../../ui/subscribeSection/SubscribeSection";

class Other extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    pageChange();
  }

  render() {
    const { taxPlanning, siteData } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(taxPlanning.pageTitle)}</title>
          <meta
            name="description"
            content={pickFirstAvailableString(
              taxPlanning.pageDescription,
              siteData.siteDescription
            )}
          />
        </Head>
        <section className={`container ${styles.indexLinkContainer}`}>
          <div className="row">
            <div className="col-xs-12">
              <Link
                to="/client-services"
                className={`style-as-h3 ${styles.indexLink}`}
              >
                Back to Client Services
              </Link>
            </div>
          </div>
        </section>
        <section
          className={`container--fluid ${styles.dingusDotContainer} ${
            styles.heroContainer
          } dg-hero`}
        >
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 col-md-8 ${styles.heroTextContainer}`}>
                <h1 className="style-as-h3">{taxPlanning.hero.name}</h1>
                <p className="style-as-h1">{taxPlanning.hero.title}</p>
              </div>
            </div>
            <div className={styles.dingusDot1} />
          </div>
        </section>
        <section className="dg-serviceInfo">
          <div className={`container--fluid ${styles.serviceInfoContainer}`}>
            <div className="container">
              <div className={`row ${styles.serviceInfoRow}`}>
                <div className="col-xs-12">
                  <p>{taxPlanning.serviceInfo.section1}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className={`row ${styles.infoSectionRow}`}>
              <div
                className={`col-xs-12 col-md-6 col-lg-5 ${
                  styles.infoSectionColImage
                }`}
              >
                <div
                  className={`${styles.imgContainer} ${
                    styles.dingusDotRelative
                  } ${styles.dingusDot2}`}
                >
                  <img
                    className={`${styles.infoSectionImage}`}
                    src={taxPlanning.serviceInfo.section2.image.src}
                    alt={taxPlanning.serviceInfo.section2.image.alt}
                  />
                </div>
              </div>
              <div className="col-lg-1 hidden-lg-down" />
              <div
                className={`col-xs-12 col-md-6 ${styles.infoSectionColText}`}
              >
                <p className="style-as-h2">
                  {taxPlanning.serviceInfo.section2.description}
                </p>
              </div>
            </div>
          </div>
          <div className={`container--fluid ${styles.serviceInfoContainer}`}>
            <div className="container">
              <div className={`row ${styles.serviceInfoRow}`}>
                <div className="col-xs-12">
                  <p className="style-as-h2">
                    {taxPlanning.serviceInfo.section3}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FullWidthSectionActionLink
          linkText={pickFirstAvailableString(
            taxPlanning.actionBanner.text,
            siteData.actionBanner.text
          )}
          to={pickFirstAvailableString(
            taxPlanning.actionBanner.link,
            siteData.actionBanner.link
          )}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={pickFirstAvailableString(
            taxPlanning.subscribe.heading,
            siteData.subscribe.heading
          )}
          text={pickFirstAvailableString(
            taxPlanning.subscribe.text,
            siteData.subscribe.text
          )}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withSiteAndRouteData(Other);