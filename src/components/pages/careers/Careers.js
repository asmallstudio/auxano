import React from "react";
import { withRouteData, Head } from "react-static";
import { pageChange } from "../../../lib/utils/pageChange";
import { getFullPageTitle } from "../../../lib/utils/copy";

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
    const { careers } = this.props;

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
          linkText={careers.actionBanner.text}
          to={careers.actionBanner.link}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={careers.subscribe.heading}
          text={careers.subscribe.text}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withRouteData(Careers);
