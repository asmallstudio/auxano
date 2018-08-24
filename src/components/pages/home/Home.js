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
    return (
      <React.Fragment>
        <div className={`container--fluid ${styles.heroContainer}`}>
          <div className={`container`}>
            <div className="row">
              <div className={`col-xs-12 col-md-6 ${styles.heroTextContainer}`}>
                <h1>{this.props.home.hero.title}</h1>
                <p>{this.props.home.hero.subtitle}</p>
                <CallToActionLink to={this.props.home.hero.link}>
                  CTA Button
                </CallToActionLink>
              </div>
            </div>
          </div>
        </div>
        <FullWidthSectionText text={this.props.home.pullquote} />
        <FullWidthSectionActionLink
          linkText={this.props.home.learnMore.text}
          to={this.props.home.learnMore.link}
        />
        <SubscribeSection
          heading={this.props.home.subscribe.heading}
          text={this.props.home.subscribe.text}
        />
      </React.Fragment>
    );
  }
}

export default withRouteData(Home);
