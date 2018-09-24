import React from "react";
import { withRouteData, Head } from "react-static";
import { pageChange } from "../../../../lib/utils/pageChange";
import { getFullPageTitle } from "../../../../lib/utils/copy";

import styles from "./personalFinances.scss";
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
    const { personalFinances } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(personalFinances.pageTitle)}</title>
        </Head>
        <section
          className={`container--fluid ${styles.dingusDotContainer} ${
            styles.heroContainer
          } dg-hero`}
        >
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 col-md-8 ${styles.heroTextContainer}`}>
                <h1 className="style-as-h3">{personalFinances.hero.name}</h1>
                <p className="style-as-h1">{personalFinances.hero.title}</p>
              </div>
            </div>
            <div className={styles.dingusDot1} />
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
          linkText={personalFinances.actionBanner.text}
          to={personalFinances.actionBanner.link}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={personalFinances.subscribe.heading}
          text={personalFinances.subscribe.text}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withRouteData(Other);
