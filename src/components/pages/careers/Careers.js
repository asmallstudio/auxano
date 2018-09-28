import React from "react";
import { withRouteData, Head } from "react-static";
import { pageChange } from "../../../lib/utils/pageChange";
import {
  getFullPageTitle,
  pickFirstAvailableString
} from "../../../lib/utils/copy";

import styles from "./careers.scss";
import Markdown from "react-markdown";
import FullWidthSectionActionLink from "../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "../../ui/subscribeSection/SubscribeSection";

class Careers extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    pageChange();
  }

  render() {
    const { careers, globalData } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(careers.pageTitle)}</title>
        </Head>
        <section className={`container--fluid ${styles.heroContainer} dg-hero`}>
          <div
            className={`${styles.heroImageContainer} ${styles.dingusDotHero}`}
          >
            <img src={careers.hero.image} className={styles.heroImage} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 col-md-6 ${styles.heroTextContainer}`}>
                <h1>{careers.hero.title}</h1>
                <p>
                  <Markdown source={careers.hero.subtitle} />
                </p>
              </div>
            </div>
          </div>
        </section>
        <FullWidthSectionActionLink
          linkText={pickFirstAvailableString(
            careers.actionBanner.text,
            globalData.actionBanner.text
          )}
          to={pickFirstAvailableString(
            careers.actionBanner.link,
            globalData.actionBanner.link
          )}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={pickFirstAvailableString(
            careers.subscribe.heading,
            globalData.subscribe.heading
          )}
          text={pickFirstAvailableString(
            careers.subscribe.text,
            globalData.subscribe.text
          )}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withRouteData(Careers);
