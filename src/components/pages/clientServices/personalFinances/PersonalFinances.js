import React from "react";
import { Head } from "react-static";
import { Link } from "@reach/router";
import { withSiteAndRouteData } from "../../../../lib/utils/hoc";
import { pageChange } from "../../../../lib/utils/pageChange";
import {
  getFullPageTitle,
  pickFirstAvailableString
} from "../../../../lib/utils/copy";

import styles from "./personalFinances.scss";
import FullWidthSectionText from "../../../ui/fullWidthSectionText/FullWidthSectionText";
import FullWidthSectionActionLink from "../../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "../../../ui/subscribeSection/SubscribeSection";

class PersonalFinances extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    pageChange();
  }

  render() {
    const { personalFinances, siteData } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(personalFinances.pageTitle)}</title>
          <meta
            name="description"
            content={pickFirstAvailableString(
              personalFinances.pageDescription,
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
              <Link
                to="/client-services"
                className={`style-as-h3 ${styles.indexLink}`}
              >
                Back to Client Services
              </Link>
            </div>
          </div>
          <div className={styles.dingusDot1} />
        </section>
        <section className={`container--fluid ${styles.heroContainer} dg-hero`}>
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 col-md-8 ${styles.heroTextContainer}`}>
                <h1 className="style-as-h3">{personalFinances.hero.name}</h1>
                <p className="style-as-h1">{personalFinances.hero.title}</p>
              </div>
            </div>
          </div>
        </section>
        <FullWidthSectionText
          text={personalFinances.pullquote}
          className="dg-pullquote"
        />
        <section className="container dg-serviceInfo">
          <div className={`row ${styles.serviceInfoRow}`}>
            <div className={`col-xs-12 col-md-6 ${styles.serviceInfoText}`}>
              <p className="style-as-h2">
                {personalFinances.serviceInfo.descriptionLede}
              </p>
              <p>{personalFinances.serviceInfo.description}</p>
            </div>
            <div className="col-lg-1 hidden-lg-down" />
            <ul
              className={`col-xs-12 col-md-6 col-lg-5 ${
                styles.serviceInfoList
              }`}
            >
              <li className={styles.serviceInfoListItem}>
                <img
                  className={`${styles.serviceInfoListItemImage}`}
                  src={personalFinances.serviceInfo.list.item1.icon}
                  alt=""
                />
                <p>{personalFinances.serviceInfo.list.item1.text}</p>
              </li>
              <li className={styles.serviceInfoListItem}>
                <img
                  className={`${styles.serviceInfoListItemImage}`}
                  src={personalFinances.serviceInfo.list.item2.icon}
                  alt=""
                />
                <p>{personalFinances.serviceInfo.list.item2.text}</p>
              </li>
              <li className={styles.serviceInfoListItem}>
                <img
                  className={`${styles.serviceInfoListItemImage}`}
                  src={personalFinances.serviceInfo.list.item3.icon}
                  alt=""
                />
                <p>{personalFinances.serviceInfo.list.item3.text}</p>
              </li>
            </ul>
          </div>
        </section>
        <FullWidthSectionActionLink
          linkText={pickFirstAvailableString(
            personalFinances.actionBanner.text,
            siteData.actionBanner.text
          )}
          to={pickFirstAvailableString(
            personalFinances.actionBanner.link,
            siteData.actionBanner.link
          )}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={pickFirstAvailableString(
            personalFinances.subscribe.heading,
            siteData.subscribe.heading
          )}
          text={pickFirstAvailableString(
            personalFinances.subscribe.text,
            siteData.subscribe.text
          )}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withSiteAndRouteData(PersonalFinances);
