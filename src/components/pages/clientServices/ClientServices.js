import React from "react";
import { Head } from "react-static";
import { withSiteAndRouteData } from "../../../lib/utils/hoc";
import { pageChange } from "../../../lib/utils/pageChange";
import {
  getFullPageTitle,
  pickFirstAvailableString
} from "../../../lib/utils/copy";

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
    const { clientServices, globalData } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(clientServices.pageTitle)}</title>
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
            <OneThirdColumn
              data={clientServices.services.item1}
              className="dg-item1"
            />
            <OneThirdColumn
              data={clientServices.services.item2}
              className="dg-item2"
            />
            <OneThirdColumn
              data={clientServices.services.item3}
              className="dg-item3"
            />
          </div>
          <div className={`${styles.threecols} row`}>
            <OneThirdColumn
              data={clientServices.services.item4}
              className="dg-item4"
            />
            <OneThirdColumn
              data={clientServices.services.item5}
              className="dg-item5"
            />
            <OneThirdColumn
              data={clientServices.services.item6}
              className="dg-item6"
            />
          </div>
          <div className={`${styles.threecols} row`}>
            <OneThirdColumn
              data={clientServices.services.item7}
              className="dg-item7"
            />
            <OneThirdColumn
              data={clientServices.services.item8}
              className="dg-item8"
            />
          </div>
        </section>
        <FullWidthSectionActionLink
          linkText={pickFirstAvailableString(
            clientServices.actionBanner.text,
            globalData.actionBanner.text
          )}
          to={pickFirstAvailableString(
            clientServices.actionBanner.link,
            globalData.actionBanner.link
          )}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={pickFirstAvailableString(
            clientServices.subscribe.heading,
            globalData.subscribe.heading
          )}
          text={pickFirstAvailableString(
            clientServices.subscribe.text,
            globalData.subscribe.text
          )}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withSiteAndRouteData(ClientServices);
