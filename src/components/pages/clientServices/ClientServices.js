import React from "react";
import { Head } from "react-static";
import {
  getFullPageTitle,
  pickFirstAvailableString
} from "@asmallstudio/utilities";
import { withSiteAndRouteData } from "../../../lib/utils/hoc";
import { pageChange } from "../../../lib/utils/pageChange";

import styles from "./clientServices.scss";
import OneThirdColumn from "../../ui/oneThirdColumn/OneThirdColumn";
import FullWidthSectionActionLink from "../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "../../ui/subscribeSection/SubscribeSection";

class ClientServices extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    pageChange();
  }

  render() {
    const { clientServices, siteData } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(clientServices.pageTitle)}</title>
          <meta
            name="description"
            content={pickFirstAvailableString(
              clientServices.pageDescription,
              siteData.siteDescription
            )}
          />
        </Head>
        <section
          className={`container--fluid ${styles.dingusDotContainer} ${
            styles.heroContainer
          } dg-hero`}
        >
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 col-md-8 ${styles.heroTextContainer}`}>
                <h1>{clientServices.hero.title}</h1>
              </div>
            </div>
            <div className={styles.dingusDot1} />
          </div>
        </section>
        <section className="container dg-services">
          <div className={`${styles.threecols} row`}>
            <OneThirdColumn data={clientServices.services[0]} />
            <OneThirdColumn data={clientServices.services[1]} />
            <OneThirdColumn data={clientServices.services[2]} />
          </div>
          <div className={`${styles.threecols} row`}>
            <OneThirdColumn data={clientServices.services[3]} />
            <OneThirdColumn data={clientServices.services[4]} />
            <OneThirdColumn data={clientServices.services[5]} />
          </div>
          <div className={`${styles.threecols} row`}>
            <OneThirdColumn data={clientServices.services[6]} />
            <OneThirdColumn data={clientServices.services[7]} />
            <OneThirdColumn data={clientServices.services[8]} />
          </div>
        </section>
        <FullWidthSectionActionLink
          linkText={pickFirstAvailableString(
            clientServices.actionBanner.text,
            siteData.actionBanner.text
          )}
          to={pickFirstAvailableString(
            clientServices.actionBanner.link,
            siteData.actionBanner.link
          )}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={pickFirstAvailableString(
            clientServices.subscribe.heading,
            siteData.subscribe.heading
          )}
          text={pickFirstAvailableString(
            clientServices.subscribe.text,
            siteData.subscribe.text
          )}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withSiteAndRouteData(ClientServices);
