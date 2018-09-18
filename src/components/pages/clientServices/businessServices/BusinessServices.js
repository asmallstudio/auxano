import React from "react";
import { withRouteData, Head } from "react-static";
import { pageChange } from "../../../../lib/utils/pageChange";
import { getFullPageTitle } from "../../../../lib/utils/copy";

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
    const { businessServices } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(businessServices.pageTitle)}</title>
        </Head>
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
          className="dg-pullquote"
        />
        <FullWidthSectionActionLink
          linkText={businessServices.actionBanner.text}
          to={businessServices.actionBanner.link}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={businessServices.subscribe.heading}
          text={businessServices.subscribe.text}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withRouteData(Other);
