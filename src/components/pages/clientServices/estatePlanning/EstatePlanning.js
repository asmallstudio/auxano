import React from "react";
import { Head } from "react-static";
import { AmbiLink } from "@asmallstudio/components";
import {
  getFullPageTitle,
  pickFirstAvailableString
} from "@asmallstudio/utilities";
import { withSiteAndRouteData } from "../../../../lib/utils/hoc";
import { pageChange } from "../../../../lib/utils/pageChange";
import constants from "../../../../lib/constants.json";

import styles from "./estatePlanning.scss";
import FullWidthSectionText from "../../../ui/fullWidthSectionText/FullWidthSectionText";
import FullWidthSectionActionLink from "../../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "../../../ui/subscribeSection/SubscribeSection";

class EstatePlanning extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    pageChange();
  }

  render() {
    const { estatePlanning, siteData } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>
            {getFullPageTitle(
              estatePlanning.pageTitle,
              constants.siteMeta.title
            )}
          </title>
          <meta
            name="description"
            content={pickFirstAvailableString(
              estatePlanning.pageDescription,
              siteData.siteDescription
            )}
          />
        </Head>
        <section
          className={`container ${styles.indexLinkContainer} ${
            styles.dingusDotContainer
          }`}
        >
          <div className="row">
            <div className="col-xs-12">
              <AmbiLink
                to="/client-services"
                className={`style-as-h3 ${styles.indexLink}`}
              >
                Back to Client Services
              </AmbiLink>
            </div>
          </div>
          <div className={`${styles.dingusDot1} hidden-md-up`} />
        </section>
        <section
          className={`container--fluid ${styles.heroContainer} ${
            styles.dingusDotContainer
          } dg-hero`}
        >
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 col-md-8 ${styles.heroTextContainer}`}>
                <h1 className="style-as-h3">{estatePlanning.hero.name}</h1>
                <p className="style-as-h1">{estatePlanning.hero.title}</p>
                <p>{estatePlanning.hero.description}</p>
              </div>
            </div>
          </div>
          <div className={`${styles.dingusDot1} hidden-md-down`} />
        </section>
        <FullWidthSectionText
          text={estatePlanning.pullquote1}
          className={`${styles.pullquote} dg-pullquote1`}
        />
        <section className="container dg-imageRow">
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
                  src={estatePlanning.imageRow.image.src}
                  alt={estatePlanning.imageRow.image.alt}
                />
              </div>
            </div>
            <div className="col-lg-1 hidden-lg-down" />
            <div className={`col-xs-12 col-md-6 ${styles.infoSectionColText}`}>
              <p>{estatePlanning.imageRow.description}</p>
            </div>
          </div>
        </section>
        <FullWidthSectionText
          text={estatePlanning.pullquote2}
          className={`${styles.pullquote2} dg-pullquote2`}
        />
        <FullWidthSectionActionLink
          linkText={pickFirstAvailableString(
            estatePlanning.actionBanner.text,
            siteData.actionBanner.text
          )}
          to={pickFirstAvailableString(
            estatePlanning.actionBanner.link,
            siteData.actionBanner.link
          )}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={pickFirstAvailableString(
            estatePlanning.subscribe.heading,
            siteData.subscribe.heading
          )}
          text={pickFirstAvailableString(
            estatePlanning.subscribe.text,
            siteData.subscribe.text
          )}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withSiteAndRouteData(EstatePlanning);
