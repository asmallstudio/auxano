import React from "react";
import { withRouteData, Head } from "react-static";
import { pageChange } from "../../../../lib/utils/pageChange";
import {
  getFullPageTitle,
  pickFirstAvailableString
} from "../../../../lib/utils/copy";

import styles from "./riskManagement.scss";
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
    const { riskManagement, globalData } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(riskManagement.pageTitle)}</title>
        </Head>
        <section
          className={`container--fluid ${styles.dingusDotContainer} ${
            styles.heroContainer
          } dg-hero`}
        >
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 col-md-8 ${styles.heroTextContainer}`}>
                <h1 className="style-as-h3">{riskManagement.hero.name}</h1>
                <p className="style-as-h1">{riskManagement.hero.title}</p>
                <p>{riskManagement.hero.description}</p>
              </div>
            </div>
            <div className={styles.dingusDot1} />
          </div>
        </section>
        <FullWidthSectionText
          text={riskManagement.pullquote}
          className={`dg-pullquote ${styles.pullquote}`}
        />
        <section className="container dg-serviceInfo">
          <div className={`row ${styles.serviceInfoRow}`}>
            <div className={`col-xs-12 ${styles.serviceInfoText}`}>
              <p className={`style-as-h3 ${styles.description1}`}>
                {riskManagement.serviceInfo.description1}
              </p>
            </div>
          </div>
        </section>
        <section className="container dg-serviceInfo">
          <div className={`row ${styles.serviceInfoRow}`}>
            <div className={`col-xs-12 col-md-6 ${styles.serviceInfoText}`}>
              <p className="style-as-h2">
                {riskManagement.serviceInfo.description2}
              </p>
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
                  src={riskManagement.serviceInfo.list.item1.icon}
                  alt=""
                />
                <p>{riskManagement.serviceInfo.list.item1.text}</p>
              </li>
              <li className={styles.serviceInfoListItem}>
                <img
                  className={`${styles.serviceInfoListItemImage}`}
                  src={riskManagement.serviceInfo.list.item2.icon}
                  alt=""
                />
                <p>{riskManagement.serviceInfo.list.item2.text}</p>
              </li>
              <li className={styles.serviceInfoListItem}>
                <img
                  className={`${styles.serviceInfoListItemImage}`}
                  src={riskManagement.serviceInfo.list.item3.icon}
                  alt=""
                />
                <p>{riskManagement.serviceInfo.list.item3.text}</p>
              </li>
            </ul>
          </div>
        </section>
        <FullWidthSectionActionLink
          linkText={pickFirstAvailableString(
            riskManagement.actionBanner.text,
            globalData.actionBanner.text
          )}
          to={pickFirstAvailableString(
            riskManagement.actionBanner.link,
            globalData.actionBanner.link
          )}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={pickFirstAvailableString(
            riskManagement.subscribe.heading,
            globalData.subscribe.heading
          )}
          text={pickFirstAvailableString(
            riskManagement.subscribe.text,
            globalData.subscribe.text
          )}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withRouteData(Other);
