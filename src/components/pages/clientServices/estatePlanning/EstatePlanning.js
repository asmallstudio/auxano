import React from "react";
import { withRouteData, Head } from "react-static";
import { pageChange } from "../../../../lib/utils/pageChange";
import { getFullPageTitle } from "../../../../lib/utils/copy";

import styles from "./estatePlanning.scss";
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
    const { estatePlanning } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(estatePlanning.pageTitle)}</title>
        </Head>
        <section
          className={`container--fluid ${styles.dingusDotContainer} ${
            styles.heroContainer
          } dg-hero`}
        >
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 col-md-8 ${styles.heroTextContainer}`}>
                <h1 className="style-as-h3">{estatePlanning.hero.name}</h1>
                <p className="style-as-h1">{estatePlanning.hero.title}</p>
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
                  <p>{estatePlanning.serviceInfo.description1}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`container ${styles.serviceInfoContainer}`}>
            <div className="container">
              <div className={`row ${styles.serviceInfoRow}`}>
                <div className="col-xs-12">
                  <p className="style-as-h2">
                    {estatePlanning.serviceInfo.description2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FullWidthSectionActionLink
          linkText={estatePlanning.actionBanner.text}
          to={estatePlanning.actionBanner.link}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={estatePlanning.subscribe.heading}
          text={estatePlanning.subscribe.text}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withRouteData(Other);
