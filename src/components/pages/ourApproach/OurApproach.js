import React from "react";
import { withRouteData, Head } from "react-static";
import { getFullPageTitle } from "../../../lib/utils/copy";

import styles from "./ourApproach.scss";
import InfoSectionRow from "./InfoSectionRow";
import FullWidthSectionActionLink from "../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "../../ui/subscribeSection/SubscribeSection";

class OurApproach extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ourApproach } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(ourApproach.pageTitle)}</title>
        </Head>
        <section className={`container--fluid ${styles.heroContainer}`}>
          <div className={`container`}>
            <div className="row">
              <div className={`col-xs-12 col-md-8 ${styles.heroTextContainer}`}>
                <h1>{ourApproach.hero.title}</h1>
              </div>
            </div>
          </div>
        </section>
        <div
          className={`container--fluid ${styles.dingusDotOverflowContainer}`}
        >
          <section className="container">
            <InfoSectionRow>
              <h2>{ourApproach.items.item1.heading}</h2>
              <p>{ourApproach.items.item1.body}</p>
            </InfoSectionRow>
            <InfoSectionRow>
              <h2>{ourApproach.items.item2.heading}</h2>
              <p>{ourApproach.items.item2.body}</p>
            </InfoSectionRow>
            <InfoSectionRow>
              <h2>{ourApproach.items.item3.heading}</h2>
              <p>{ourApproach.items.item3.body}</p>
            </InfoSectionRow>
            <InfoSectionRow>
              <h2>{ourApproach.items.item4.heading}</h2>
              <p>{ourApproach.items.item4.body}</p>
            </InfoSectionRow>
          </section>
        </div>
        <FullWidthSectionActionLink
          linkText={ourApproach.actionBanner.text}
          to={ourApproach.actionBanner.link}
        />
        <SubscribeSection
          heading={ourApproach.subscribe.heading}
          text={ourApproach.subscribe.text}
        />
      </React.Fragment>
    );
  }
}

export default withRouteData(OurApproach);
