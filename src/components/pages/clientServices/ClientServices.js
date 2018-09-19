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
          } dg-hero`}
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
        <section className="container dg-services">
          <div className={`${styles.threecols} row`}>
            <OneThirdColumn
              data={clientServices.services.item1}
              className="dg-item1"
            />
            <OneThirdColumn
              data={clientServices.services.item2}
              className="dg-item2"
            />
            <OneThirdColumn
              data={clientServices.services.item3}
              className="dg-item3"
            />
          </div>
          <div className={`${styles.threecols} row`}>
            <OneThirdColumn
              data={clientServices.services.item4}
              className="dg-item4"
            />
            <OneThirdColumn
              data={clientServices.services.item5}
              className="dg-item5"
            />
            <OneThirdColumn
              data={clientServices.services.item6}
              className="dg-item6"
            />
          </div>
        </section>
        <section className="container dg-infoSection">
          <div className={`row ${styles.infoSectionRow}`}>
            <div className={`col-xs-12 col-md-6 ${styles.infoSectionColText}`}>
              <img
                src={clientServices.infoSection.icon}
                className={styles.infoSectionIcon}
                alt=""
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
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={clientServices.subscribe.heading}
          text={clientServices.subscribe.text}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withRouteData(Other);
