import React from "react";
import Head from "next/head";
import { NextAmbiLink } from "@asmallstudio/components";
import {
  getFullPageTitle,
  pickFirstAvailableString,
} from "@asmallstudio/utilities";
import constants from "lib/constants.json";

import styles from "./risk-management.module.scss";
import FullWidthSectionText from "components/ui/fullWidthSectionText/FullWidthSectionText";
import FullWidthSectionActionLink from "components/ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "components/ui/subscribeSection/SubscribeSection";

export default function RiskManagement({ siteData, riskManagement }) {
  return (
    <>
      <Head>
        <title>
          {getFullPageTitle(riskManagement.pageTitle, constants.siteMeta.title)}
        </title>
        <meta
          name="description"
          content={pickFirstAvailableString(
            riskManagement.pageDescription,
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
              <h1 className="style-as-h3">{riskManagement.hero.name}</h1>
              <p className="style-as-h1">{riskManagement.hero.title}</p>
              <p>{riskManagement.hero.description}</p>
            </div>
          </div>
        </div>
        <div className={`${styles.dingusDot1} hidden-md-down`} />
      </section>
      <FullWidthSectionText
        text={riskManagement.pullquote}
        className={`dg-pullquote ${styles.pullquote}`}
      />
      <section className="container dg-serviceInfo">
        <div className={`row ${styles.serviceInfoRow}`}>
          <div className={`col-xs-12 ${styles.serviceInfoText}`}>
            <p className={`style-as-h3 ${styles.description1}`}>
              {riskManagement.serviceInfo.description1}
            </p>
          </div>
        </div>
      </section>
      <section className="container dg-serviceInfo">
        <div className={`row ${styles.serviceInfoRow}`}>
          <div className={`col-xs-12 col-md-6 ${styles.serviceInfoText}`}>
            <p className="style-as-h2">
              {riskManagement.serviceInfo.description2}
            </p>
          </div>
          <div className="col-lg-1 hidden-lg-down" />
          <ul
            className={`col-xs-12 col-md-6 col-lg-5 ${styles.serviceInfoList}`}
          >
            <li className={styles.serviceInfoListItem}>
              <img
                className={`${styles.serviceInfoListItemImage}`}
                src={riskManagement.serviceInfo.list.item1.icon}
                alt=""
              />
              <p>{riskManagement.serviceInfo.list.item1.text}</p>
            </li>
            <li className={styles.serviceInfoListItem}>
              <img
                className={`${styles.serviceInfoListItemImage}`}
                src={riskManagement.serviceInfo.list.item2.icon}
                alt=""
              />
              <p>{riskManagement.serviceInfo.list.item2.text}</p>
            </li>
            <li className={styles.serviceInfoListItem}>
              <img
                className={`${styles.serviceInfoListItemImage}`}
                src={riskManagement.serviceInfo.list.item3.icon}
                alt=""
              />
              <p>{riskManagement.serviceInfo.list.item3.text}</p>
            </li>
          </ul>
        </div>
      </section>
      <FullWidthSectionActionLink
        linkText={pickFirstAvailableString(
          riskManagement.actionBanner.text,
          siteData.actionBanner.text
        )}
        to={pickFirstAvailableString(
          riskManagement.actionBanner.link,
          siteData.actionBanner.link
        )}
        className="dg-actionBanner"
      />
      <SubscribeSection
        heading={pickFirstAvailableString(
          riskManagement.subscribe.heading,
          siteData.subscribe.heading
        )}
        text={pickFirstAvailableString(
          riskManagement.subscribe.text,
          siteData.subscribe.text
        )}
        className="dg-subscribe"
      />
    </>
  );
}

export async function getStaticProps() {
  const riskManagement = await import(
    "data/pages/clientServices/riskManagement.json"
  );

  return {
    props: { riskManagement: riskManagement.default },
  };
}
