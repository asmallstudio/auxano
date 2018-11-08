import React from "react";
import { Head, Link } from "react-static";
import { withSiteAndRouteData } from "../../../../lib/utils/hoc";
import { pageChange } from "../../../../lib/utils/pageChange";
import {
  getFullPageTitle,
  pickFirstAvailableString
} from "../../../../lib/utils/copy";

import styles from "./investments.scss";
import FullWidthSectionText from "../../../ui/fullWidthSectionText/FullWidthSectionText";
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
    const { investments, siteData } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(investments.pageTitle)}</title>
          <meta
            name="description"
            content={pickFirstAvailableString(
              investments.pageDescription,
              siteData.siteDescription
            )}
          />
        </Head>
        <section className={`container ${styles.indexLinkContainer}`}>
          <div className="row">
            <div className="col-xs-12">
              <Link
                to="/client-services"
                className={`style-as-h3 ${styles.indexLink}`}
              >
                Back to Client Services
              </Link>
            </div>
          </div>
        </section>
        <section
          className={`container--fluid ${styles.dingusDotContainer} ${
            styles.heroContainer
          } dg-hero`}
        >
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 col-md-8 ${styles.heroTextContainer}`}>
                <h1 className="style-as-h3">{investments.hero.name}</h1>
                <p className="style-as-h1">{investments.hero.title}</p>
              </div>
            </div>
            <div className={styles.dingusDot1} />
          </div>
        </section>
        <FullWidthSectionText
          text={investments.pullquote1}
          className="dg-pullquote1"
        />
        <section className="container dg-infoSection">
          <div className={`row ${styles.infoSectionRow}`}>
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
                  src={investments.infoSection.image.src}
                  alt={investments.infoSection.image.alt}
                />
              </div>
            </div>
            <div className="col-lg-1 hidden-lg-down" />
            <div className={`col-xs-12 col-md-6 ${styles.infoSectionColText}`}>
              <p className="style-as-h2">
                {investments.infoSection.descriptionLede}
              </p>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <p className={styles.infoSectionDescription}>
                  {investments.infoSection.description}
                </p>
              </div>
            </div>
          </div>
        </section>
        <FullWidthSectionText
          text={investments.pullquote2}
          className={`${styles.pullquote2} dg-pullquote2`}
        />
        <section className="container dg-tableInfo">
          <table className={styles.infoTable}>
            <thead>
              <tr>
                <th />
                <th>{investments.infoTable.tableHead.tableHead1}</th>
                <th className={styles.highlightCol}>
                  {investments.infoTable.tableHead.tableHead2}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <span>{investments.infoTable.tableRow1.tableRowHead}</span>
                </th>
                <td>
                  <p>{investments.infoTable.tableRow1.tableCell1}</p>
                </td>
                <td className={styles.highlightCol}>
                  <p>{investments.infoTable.tableRow1.tableCell2}</p>
                </td>
              </tr>
              <tr>
                <th>
                  <span>{investments.infoTable.tableRow2.tableRowHead}</span>
                </th>
                <td>
                  <p>{investments.infoTable.tableRow2.tableCell1}</p>
                </td>
                <td className={styles.highlightCol}>
                  <p>{investments.infoTable.tableRow2.tableCell2}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="container dg-serviceInfo">
          <div className={styles.serviceInfoRow}>
            <ul className={`row ${styles.serviceInfoList}`}>
              <li
                className={`col-xs-12 col-md-4 ${styles.serviceInfoListItem}`}
              >
                <img
                  className={`${styles.serviceInfoListItemImage}`}
                  src={investments.serviceInfo.list.item1.icon}
                  alt=""
                />
                <p>{investments.serviceInfo.list.item1.text}</p>
              </li>
              <li
                className={`col-xs-12 col-md-4 ${styles.serviceInfoListItem}`}
              >
                <img
                  className={`${styles.serviceInfoListItemImage}`}
                  src={investments.serviceInfo.list.item2.icon}
                  alt=""
                />
                <p>{investments.serviceInfo.list.item2.text}</p>
              </li>
              <li
                className={`col-xs-12 col-md-4 ${styles.serviceInfoListItem}`}
              >
                <img
                  className={`${styles.serviceInfoListItemImage}`}
                  src={investments.serviceInfo.list.item3.icon}
                  alt=""
                />
                <p>{investments.serviceInfo.list.item3.text}</p>
              </li>
            </ul>
          </div>
        </section>
        <FullWidthSectionActionLink
          linkText={pickFirstAvailableString(
            investments.actionBanner.text,
            siteData.actionBanner.text
          )}
          to={pickFirstAvailableString(
            investments.actionBanner.link,
            siteData.actionBanner.link
          )}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={pickFirstAvailableString(
            investments.subscribe.heading,
            siteData.subscribe.heading
          )}
          text={pickFirstAvailableString(
            investments.subscribe.text,
            siteData.subscribe.text
          )}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withSiteAndRouteData(Other);
