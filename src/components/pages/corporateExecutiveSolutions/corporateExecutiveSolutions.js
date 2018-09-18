import React from "react";
import { withRouteData, Head } from "react-static";
import { pageChange } from "../../../lib/utils/pageChange";
import { getFullPageTitle } from "../../../lib/utils/copy";

import styles from "./corporateExecutiveSolutions.scss";
import FullWidthSectionText from "../../ui/fullWidthSectionText/FullWidthSectionText";
import FullWidthSectionActionLink from "../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "../../ui/subscribeSection/SubscribeSection";

class Other extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    pageChange();
  }

  render() {
    const { corporateExecutiveSolutions } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>
            {getFullPageTitle(corporateExecutiveSolutions.pageTitle)}
          </title>
        </Head>
        <section
          className={`container--fluid ${styles.dingusDotContainer} ${
            styles.heroContainer
          } dg-hero`}
        >
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 col-md-8 ${styles.heroTextContainer}`}>
                <h1>{corporateExecutiveSolutions.hero.title}</h1>
                <p>{corporateExecutiveSolutions.hero.description}</p>
              </div>
            </div>
            <div className={styles.dingusDot1} />
          </div>
        </section>
        <section className="container dg-serviceInfo">
          <ul className={`row ${styles.serviceInfoList}`}>
            <div className="col-xs-12 col-md-6">
              <li>{corporateExecutiveSolutions.serviceInfoList.item1}</li>
              <li>{corporateExecutiveSolutions.serviceInfoList.item2}</li>
              <li>{corporateExecutiveSolutions.serviceInfoList.item3}</li>
              <li>{corporateExecutiveSolutions.serviceInfoList.item4}</li>
            </div>
            <div className="col-xs-12 col-md-6">
              <li>{corporateExecutiveSolutions.serviceInfoList.item5}</li>
              <li>{corporateExecutiveSolutions.serviceInfoList.item6}</li>
              <li>{corporateExecutiveSolutions.serviceInfoList.item7}</li>
              <li>{corporateExecutiveSolutions.serviceInfoList.item8}</li>
            </div>
          </ul>
        </section>
        <FullWidthSectionText
          text={corporateExecutiveSolutions.pullquote}
          className="dg-pullquote"
        />
        <FullWidthSectionActionLink
          linkText={corporateExecutiveSolutions.actionBanner.text}
          to={corporateExecutiveSolutions.actionBanner.link}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={corporateExecutiveSolutions.subscribe.heading}
          text={corporateExecutiveSolutions.subscribe.text}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withRouteData(Other);
