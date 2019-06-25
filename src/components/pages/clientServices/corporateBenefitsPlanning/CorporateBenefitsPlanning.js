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

import styles from "./corporateBenefitsPlanning.scss";
import FullWidthSectionActionLink from "../../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "../../../ui/subscribeSection/SubscribeSection";

class corporateBenefitsPlanning extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    pageChange();
  }

  render() {
    const { corporateBenefitsPlanning, siteData } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>
            {getFullPageTitle(
              corporateBenefitsPlanning.pageTitle,
              constants.siteMeta.title
            )}
          </title>
          <meta
            name="description"
            content={pickFirstAvailableString(
              corporateBenefitsPlanning.pageDescription,
              siteData.siteDescription
            )}
          />
        </Head>
        <section
          className={`container ${styles.indexLinkContainer} ${styles.dingusDotContainer}`}
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
          className={`container--fluid ${styles.dingusDotContainer} ${styles.heroContainer} dg-hero`}
        >
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 col-md-8 ${styles.heroTextContainer}`}>
                <h1>{corporateBenefitsPlanning.hero.title}</h1>
                <h2>{corporateBenefitsPlanning.hero.heading}</h2>
                <p>{corporateBenefitsPlanning.hero.description}</p>
              </div>
            </div>
            <div className={`${styles.dingusDot1} hidden-md-down`} />
          </div>
        </section>
        <section className="container dg-serviceInfoList">
          <ul className={`row ${styles.serviceInfoList}`}>
            <div className="col-xs-12 col-md-6">
              <li>{corporateBenefitsPlanning.serviceInfoList[0]}</li>
              <li>{corporateBenefitsPlanning.serviceInfoList[1]}</li>
              <li>{corporateBenefitsPlanning.serviceInfoList[2]}</li>
            </div>
            <div className="col-xs-12 col-md-6">
              <li>{corporateBenefitsPlanning.serviceInfoList[3]}</li>
              <li>{corporateBenefitsPlanning.serviceInfoList[4]}</li>
            </div>
          </ul>
        </section>
        <FullWidthSectionActionLink
          linkText={pickFirstAvailableString(
            corporateBenefitsPlanning.actionBanner.text,
            siteData.actionBanner.text
          )}
          to={pickFirstAvailableString(
            corporateBenefitsPlanning.actionBanner.link,
            siteData.actionBanner.link
          )}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={pickFirstAvailableString(
            corporateBenefitsPlanning.subscribe.heading,
            siteData.subscribe.heading
          )}
          text={pickFirstAvailableString(
            corporateBenefitsPlanning.subscribe.text,
            siteData.subscribe.text
          )}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withSiteAndRouteData(corporateBenefitsPlanning);
