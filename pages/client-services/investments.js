import React from "react";
import Head from "next/head";
import { NextAmbiLink } from "@asmallstudio/components";
import {
  getFullPageTitle,
  pickFirstAvailableString
} from "@asmallstudio/utilities";
import constants from "lib/constants.json";

import styles from "./investments.module.scss";
import FullWidthSectionText from "components/ui/fullWidthSectionText/FullWidthSectionText";
import FullWidthSectionActionLink from "components/ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "components/ui/subscribeSection/SubscribeSection";

export default function Investments({ siteData, investments }) {
  return (
    <>
      <Head>
        <title>
          {getFullPageTitle(investments.pageTitle, constants.siteMeta.title)}
        </title>
        <meta
          name="description"
          content={pickFirstAvailableString(
            investments.pageDescription,
            siteData.siteDescription
          )}
        />
      </Head>
      <section
        className={`container ${styles.indexLinkContainer} ${styles.dingusDotContainer}`}
      >
        <div className="row">
          <div className="col-xs-12">
            <NextAmbiLink
              href="/client-services"
              className={`style-as-h3 ${styles.indexLink}`}
            >
              Back to Client Services
              </NextAmbiLink>
          </div>
        </div>
        <div className={`${styles.dingusDot1} hidden-md-up`} />
      </section>
      <section
        className={`container--fluid ${styles.heroContainer} ${styles.dingusDotContainer} dg-hero`}
      >
        <div className="container">
          <div className="row">
            <div className={`col-xs-12 col-md-8 ${styles.heroTextContainer}`}>
              <h1 className="style-as-h3">{investments.hero.name}</h1>
              <p className="style-as-h1">{investments.hero.title}</p>
            </div>
          </div>
        </div>
        <div className={`${styles.dingusDot1} hidden-md-down`} />
      </section>
      <FullWidthSectionText
        text={investments.pullquote1}
        className="dg-pullquote1"
      />
      <section className="container dg-infoSection">
        <div className={`row ${styles.infoSectionRow}`}>
          <div
            className={`col-xs-12 col-md-6 col-lg-5 ${styles.infoSectionColImage}`}
          >
            <div
              className={`${styles.imgContainer} ${styles.dingusDotRelative} ${styles.dingusDot2}`}
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
      <section className="container dg-serviceList">
        <div className={`row ${styles.serviceList}`}>
          <div className="col-xs-12">
            <p>{investments.serviceList.description}</p>
            <ul>
              {investments.serviceList.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="container dg-serviceInfo">
        <div className={styles.serviceInfoRow}>
          <ul className={`row ${styles.serviceInfoList}`}>
            <li
              className={`col-xs-12 col-md-4 ${styles.serviceInfoListItem}`}
            >
              <img
                className={`${styles.serviceInfoListItemImage}`}
                src={investments.serviceInfo.list[0].icon}
                alt=""
              />
              <p>{investments.serviceInfo.list[0].text}</p>
            </li>
            <li
              className={`col-xs-12 col-md-4 ${styles.serviceInfoListItem}`}
            >
              <img
                className={`${styles.serviceInfoListItemImage}`}
                src={investments.serviceInfo.list[1].icon}
                alt=""
              />
              <p>{investments.serviceInfo.list[1].text}</p>
            </li>
            <li
              className={`col-xs-12 col-md-4 ${styles.serviceInfoListItem}`}
            >
              <img
                className={`${styles.serviceInfoListItemImage}`}
                src={investments.serviceInfo.list[2].icon}
                alt=""
              />
              <p>{investments.serviceInfo.list[2].text}</p>
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
    </>
  );
}

export async function getStaticProps() {
  const investments = await import("data/pages/clientServices/investments.json");

  return {
    props: { investments: investments.default },
  };
}