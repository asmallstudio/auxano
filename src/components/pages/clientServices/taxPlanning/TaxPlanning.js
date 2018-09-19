import React from "react";
import { withRouteData, Head } from "react-static";
import { pageChange } from "../../../../lib/utils/pageChange";
import { getFullPageTitle } from "../../../../lib/utils/copy";

import styles from "./taxPlanning.scss";
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
    const { taxPlanning } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(taxPlanning.pageTitle)}</title>
        </Head>
        <section
          className={`container--fluid ${styles.dingusDotContainer} ${
            styles.heroContainer
          } dg-hero`}
        >
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 col-md-8 ${styles.heroTextContainer}`}>
                <h1 className="style-as-h3">{taxPlanning.hero.name}</h1>
                <p className="style-as-h1">{taxPlanning.hero.title}</p>
              </div>
            </div>
            <div className={styles.dingusDot1} />
          </div>
        </section>
        <section className="dg-serviceInfo">
          <div className={`container--fluid ${styles.serviceInfoContainer}`}>
            <div className="container">
              <div className={`row ${styles.serviceInfoRow}`}>
                <div className="col-xs-12">
                  <p>{taxPlanning.serviceInfo.description1}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`container ${styles.serviceInfoContainer}`}>
            <div className="container">
              <div className={`row ${styles.serviceInfoRow}`}>
                <div className="col-xs-12">
                  <p className="style-as-h2">
                    {taxPlanning.serviceInfo.description2}
                  </p>
                  <p>{taxPlanning.serviceInfo.description3}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FullWidthSectionActionLink
          linkText={taxPlanning.actionBanner.text}
          to={taxPlanning.actionBanner.link}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={taxPlanning.subscribe.heading}
          text={taxPlanning.subscribe.text}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withRouteData(Other);
