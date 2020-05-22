import React from "react";
import Head from "next/head";
import { NextAmbiLink } from "@asmallstudio/components";
import {
  getFullPageTitle,
  pickFirstAvailableString,
} from "@asmallstudio/utilities";
import constants from "lib/constants.json";

import styles from "./personal-finances.module.scss";
import FullWidthSectionText from "components/ui/fullWidthSectionText/FullWidthSectionText";
import FullWidthSectionActionLink from "components/ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "components/ui/subscribeSection/SubscribeSection";

export default function PersonalFinances({ siteData, personalFinances }) {
  return (
    <>
      <Head>
        <title>
          {getFullPageTitle(
            personalFinances.pageTitle,
            constants.siteMeta.title
          )}
        </title>
        <meta
          name="description"
          content={pickFirstAvailableString(
            personalFinances.pageDescription,
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
              <h1 className="style-as-h3">{personalFinances.hero.name}</h1>
              <p className="style-as-h1">{personalFinances.hero.title}</p>
            </div>
          </div>
        </div>
        <div className={`${styles.dingusDot1} hidden-md-down`} />
      </section>
      <FullWidthSectionText
        text={personalFinances.pullquote}
        className="dg-pullquote"
      />
      <section className="container dg-serviceInfo">
        <div className={`row ${styles.serviceInfoRow}`}>
          <div className={`col-xs-12 col-md-6 ${styles.serviceInfoText}`}>
            <p className="style-as-h2">
              {personalFinances.serviceInfo.descriptionLede}
            </p>
            <p>{personalFinances.serviceInfo.description}</p>
          </div>
          <div className="col-lg-1 hidden-lg-down" />
          <ul
            className={`col-xs-12 col-md-6 col-lg-5 ${styles.serviceInfoList}`}
          >
            <li className={styles.serviceInfoListItem}>
              <img
                className={`${styles.serviceInfoListItemImage}`}
                src={personalFinances.serviceInfo.list.item1.icon}
                alt=""
              />
              <p>{personalFinances.serviceInfo.list.item1.text}</p>
            </li>
            <li className={styles.serviceInfoListItem}>
              <img
                className={`${styles.serviceInfoListItemImage}`}
                src={personalFinances.serviceInfo.list.item2.icon}
                alt=""
              />
              <p>{personalFinances.serviceInfo.list.item2.text}</p>
            </li>
            <li className={styles.serviceInfoListItem}>
              <img
                className={`${styles.serviceInfoListItemImage}`}
                src={personalFinances.serviceInfo.list.item3.icon}
                alt=""
              />
              <p>{personalFinances.serviceInfo.list.item3.text}</p>
            </li>
          </ul>
        </div>
      </section>
      <FullWidthSectionActionLink
        linkText={pickFirstAvailableString(
          personalFinances.actionBanner.text,
          siteData.actionBanner.text
        )}
        to={pickFirstAvailableString(
          personalFinances.actionBanner.link,
          siteData.actionBanner.link
        )}
        className="dg-actionBanner"
      />
      <SubscribeSection
        heading={pickFirstAvailableString(
          personalFinances.subscribe.heading,
          siteData.subscribe.heading
        )}
        text={pickFirstAvailableString(
          personalFinances.subscribe.text,
          siteData.subscribe.text
        )}
        className="dg-subscribe"
      />
    </>
  );
}

export async function getStaticProps() {
  const personalFinances = await import(
    "data/pages/clientServices/personalFinances.json"
  );

  return {
    props: { personalFinances: personalFinances.default },
  };
}
