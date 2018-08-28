import React from "react";
import { withRouteData, Head } from "react-static";
import { pageChange } from "../../../lib/utils/pageChange";
import { getFullPageTitle } from "../../../lib/utils/copy";

import styles from "./clientServices.scss";
import OneThirdColumn from "../../ui/oneThirdColumn/OneThirdColumn";
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
            <div className={styles.dingusDot1} />
          </div>
        </section>
        <section className="container">
          <div className={`${styles.threecols} row`}>
            <OneThirdColumn data={clientServices.services.item1} />
            <OneThirdColumn data={clientServices.services.item2} />
            <OneThirdColumn data={clientServices.services.item2} />
          </div>
          <div className={`${styles.threecols} row`}>
            <OneThirdColumn data={clientServices.services.item4} />
            <OneThirdColumn data={clientServices.services.item5} />
            <OneThirdColumn data={clientServices.services.item6} />
          </div>
        </section>
        <section className="container">
          <div className={`row ${styles.infoSectionRow}`}>
            <div className={`col-xs-12 col-md-6 ${styles.infoSectionColText}`}>
              <img
                src={clientServices.infoSection.icon}
                className={styles.infoSectionIcon}
              />
              <h2>{clientServices.infoSection.heading}</h2>
              <p>{clientServices.infoSection.text}</p>
            </div>
            <div className="col-lg-1 hidden-lg-down" />
            <div
              className={`col-xs-12 col-md-6 col-lg-5 ${
                styles.infoSectionColImage
              }`}
            >
              <div
                className={`${styles.imgContainer} ${
                  styles.dingusDotRelative
                } ${styles.dingusDot2}`}
              >
                <img
                  className={`${styles.infoSectionImage}`}
                  src={clientServices.infoSection.image.src}
                  alt={clientServices.infoSection.image.alt}
                />
              </div>
            </div>
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
