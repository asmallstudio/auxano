import React from "react";
import { withRouteData, Head } from "react-static";
import { pageChange } from "../../../lib/utils/pageChange";
import { getFullPageTitle } from "../../../lib/utils/copy";

import styles from "./clientServices.scss";
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
    const { clientServices } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(clientServices.pageTitle)}</title>
        </Head>
        <section
          className={`container--fluid ${styles.dingusDotContainer} ${
            styles.heroContainer
          }`}
        >
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 col-md-8 ${styles.heroTextContainer}`}>
                <h1>{clientServices.hero.title}</h1>
              </div>
            </div>
            <div className={styles.dingusDot} />
          </div>
        </section>
        <FullWidthSectionActionLink
          linkText={clientServices.actionBanner.text}
          to={clientServices.actionBanner.link}
        />
        <SubscribeSection
          heading={clientServices.subscribe.heading}
          text={clientServices.subscribe.text}
        />
      </React.Fragment>
    );
  }
}

export default withRouteData(Other);
