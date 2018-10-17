import React from "react";
import { withRouteData, Head } from "react-static";
import { pageChange } from "../../../lib/utils/pageChange";
import { getFullPageTitle } from "../../../lib/utils/copy";

import styles from "./corporateSolutions.scss";
import FullWidthSectionActionLink from "../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "../../ui/subscribeSection/SubscribeSection";

class corporateSolutions extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    pageChange();
  }

  render() {
    const { corporateSolutions } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(corporateSolutions.pageTitle)}</title>
        </Head>
        <section
          className={`container--fluid ${styles.dingusDotContainer} ${
            styles.heroContainer
          } dg-hero`}
        >
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 col-md-8 ${styles.heroTextContainer}`}>
                <h1>{corporateSolutions.hero.title}</h1>
                <p>{corporateSolutions.hero.description}</p>
              </div>
            </div>
            <div className={styles.dingusDot1} />
          </div>
        </section>
        <section className="container dg-serviceInfo">
          <ul className={`row ${styles.serviceInfoList}`}>
            <div className="col-xs-12 col-md-6">
              <li>{corporateSolutions.serviceInfoList[0]}</li>
              <li>{corporateSolutions.serviceInfoList[1]}</li>
              <li>{corporateSolutions.serviceInfoList[2]}</li>
              <li>{corporateSolutions.serviceInfoList[3]}</li>
              <li>{corporateSolutions.serviceInfoList[4]}</li>
            </div>
            <div className="col-xs-12 col-md-6">
              <li>{corporateSolutions.serviceInfoList[5]}</li>
              <li>{corporateSolutions.serviceInfoList[6]}</li>
              <li>{corporateSolutions.serviceInfoList[7]}</li>
              <li>{corporateSolutions.serviceInfoList[8]}</li>
              <li>{corporateSolutions.serviceInfoList[9]}</li>
            </div>
          </ul>
        </section>
        <FullWidthSectionActionLink
          linkText={corporateSolutions.actionBanner.text}
          to={corporateSolutions.actionBanner.link}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={corporateSolutions.subscribe.heading}
          text={corporateSolutions.subscribe.text}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withRouteData(corporateSolutions);
