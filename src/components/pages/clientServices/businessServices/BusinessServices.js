import React from "react";
import { Head, Link } from "react-static";
import { withSiteAndRouteData } from "../../../../lib/utils/hoc";
import { pageChange } from "../../../../lib/utils/pageChange";
import {
  getFullPageTitle,
  pickFirstAvailableString
} from "../../../../lib/utils/copy";

import styles from "./businessServices.scss";
import FullWidthSectionText from "../../../ui/fullWidthSectionText/FullWidthSectionText";
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
    const { businessServices, siteData } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(businessServices.pageTitle)}</title>
          <meta
            name="description"
            content={pickFirstAvailableString(
              businessServices.pageDescription,
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
                <h1 className="style-as-h3">{businessServices.hero.name}</h1>
                <p className="style-as-h1">{businessServices.hero.title}</p>
              </div>
            </div>
            <div className={styles.dingusDot1} />
          </div>
        </section>
        <section className="container dg-serviceInfo">
          <ul className={`row ${styles.serviceInfoList}`}>
            <div className="col-xs-12 col-md-6">
              <li>{businessServices.serviceInfoList.item1}</li>
              <li>{businessServices.serviceInfoList.item2}</li>
              <li>{businessServices.serviceInfoList.item3}</li>
            </div>
            <div className="col-xs-12 col-md-6">
              <li>{businessServices.serviceInfoList.item4}</li>
              <li>{businessServices.serviceInfoList.item5}</li>
              <li>{businessServices.serviceInfoList.item6}</li>
            </div>
          </ul>
        </section>
        <FullWidthSectionText
          text={businessServices.pullquote}
          className={`${styles.pullquote} dg-pullquote`}
        />
        <FullWidthSectionActionLink
          linkText={pickFirstAvailableString(
            businessServices.actionBanner.text,
            siteData.actionBanner.text
          )}
          to={pickFirstAvailableString(
            businessServices.actionBanner.link,
            siteData.actionBanner.link
          )}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={pickFirstAvailableString(
            businessServices.subscribe.heading,
            siteData.subscribe.heading
          )}
          text={pickFirstAvailableString(
            businessServices.subscribe.text,
            siteData.subscribe.text
          )}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withSiteAndRouteData(Other);