import React from "react";
import { withRouteData } from "react-static";
import { pageChange } from "../../../lib/utils/pageChange";

import CallToActionLink from "../../ui/callToActionLink/CallToActionLink";
import styles from "./home.scss";
import FullWidthSectionText from "../../ui/fullWidthSectionText/FullWidthSectionText";
import FullWidthSectionActionLink from "../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "../../ui/subscribeSection/SubscribeSection";

class Home extends React.Component {
  componentDidMount() {
    pageChange();
  }

  render() {
    const { home } = this.props;

    return (
      <React.Fragment>
        <div className={`container--fluid ${styles.heroContainer}`}>
          <div className={`container`}>
            <div className="row">
              <div className={`col-xs-12 col-md-6 ${styles.heroTextContainer}`}>
                <h1>{home.hero.title}</h1>
                <p>{home.hero.subtitle}</p>
                <CallToActionLink to={home.hero.link}>
                  CTA Button
                </CallToActionLink>
              </div>
            </div>
          </div>
        </div>
        <FullWidthSectionText text={home.pullquote} />
        <FullWidthSectionActionLink
          linkText={home.learnMore.text}
          to={home.learnMore.link}
        />
        <SubscribeSection
          heading={home.subscribe.heading}
          text={home.subscribe.text}
        />
      </React.Fragment>
    );
  }
}

export default withRouteData(Home);
