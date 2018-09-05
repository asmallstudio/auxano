import React from "react";
import { withRouteData, Head } from "react-static";
import { pageChange } from "../../../lib/utils/pageChange";
import { getFullPageTitle } from "../../../lib/utils/copy";

import styles from "./ourApproach.scss";
import InfoSectionRow from "./InfoSectionRow";
import FullWidthSectionActionLink from "../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "../../ui/subscribeSection/SubscribeSection";

class OurApproach extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    pageChange();
  }

  render() {
    const { ourApproach } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(ourApproach.pageTitle)}</title>
        </Head>
        <section
          className={`container--fluid ${styles.dingusDotContainer} ${
            styles.heroContainer
          } dg-hero`}
        >
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 col-md-8 ${styles.heroTextContainer}`}>
                <h1>{ourApproach.hero.title}</h1>
              </div>
            </div>
          </div>
          <div className={styles.dingusDot} />
        </section>
        <section className="container--fluid">
          <div className="container">
            <InfoSectionRow
              imgSrc={ourApproach.items.item1.image.src}
              imgAlt={ourApproach.items.item1.image.alt}
              className="dg-item1"
            >
              <h2>{ourApproach.items.item1.heading}</h2>
              <p>{ourApproach.items.item1.body}</p>
            </InfoSectionRow>
            <InfoSectionRow
              imgSrc={ourApproach.items.item2.image.src}
              imgAlt={ourApproach.items.item2.image.alt}
              className="dg-item2"
            >
              <h2>{ourApproach.items.item2.heading}</h2>
              <p>{ourApproach.items.item2.body}</p>
            </InfoSectionRow>
            <InfoSectionRow
              imgSrc={ourApproach.items.item3.image.src}
              imgAlt={ourApproach.items.item3.image.alt}
              className="dg-item3"
            >
              <h2>{ourApproach.items.item3.heading}</h2>
              <p>{ourApproach.items.item3.body}</p>
            </InfoSectionRow>
            <InfoSectionRow
              imgSrc={ourApproach.items.item4.image.src}
              imgAlt={ourApproach.items.item4.image.alt}
              className="dg-item4"
            >
              <h2>{ourApproach.items.item4.heading}</h2>
              <p>{ourApproach.items.item4.body}</p>
            </InfoSectionRow>
          </div>
        </section>
        <FullWidthSectionActionLink
          linkText={ourApproach.actionBanner.text}
          to={ourApproach.actionBanner.link}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={ourApproach.subscribe.heading}
          text={ourApproach.subscribe.text}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withRouteData(OurApproach);
