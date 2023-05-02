import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  getFullPageTitle,
  pickFirstAvailableString,
} from "@asmallstudio/utilities";
import constants from "lib/constants.json";

import styles from "./business-services.module.scss";
import FullWidthSectionText from "components/ui/fullWidthSectionText/FullWidthSectionText";
import FullWidthSectionActionLink from "components/ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "components/ui/subscribeSection/SubscribeSection";

export default function BusinessServices({ siteData, businessServices }) {
  return (
    <>
      <Head>
        <title>
          {getFullPageTitle(
            businessServices.pageTitle,
            constants.siteMeta.title
          )}
        </title>
        <meta
          name="description"
          content={pickFirstAvailableString(
            businessServices.pageDescription,
            siteData.siteDescription
          )}
        />
      </Head>
      <section
        className={`container ${styles.indexLinkContainer} ${styles.dingusDotContainer}`}
      >
        <div className="row">
          <div className="col-xs-12">
            <Link
              href="/client-services"
              className={`style-as-h3 ${styles.indexLink}`}
            >
              Back to Client Services
            </Link>
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
              <h1 className="style-as-h3">{businessServices.hero.name}</h1>
              <p className="style-as-h1">{businessServices.hero.title}</p>
            </div>
          </div>
          <div className={`${styles.dingusDot1} hidden-md-down`} />
        </div>
      </section>
      <section className="container dg-serviceInfo">
        <ul className={`row ${styles.serviceInfoList}`}>
          <div className="col-xs-12 col-md-6">
            <li>{businessServices.serviceInfoList.item1}</li>
            <li>{businessServices.serviceInfoList.item2}</li>
            <li>{businessServices.serviceInfoList.item3}</li>
          </div>
          <div className="col-xs-12 col-md-6">
            <li>{businessServices.serviceInfoList.item4}</li>
            <li>{businessServices.serviceInfoList.item5}</li>
            <li>{businessServices.serviceInfoList.item6}</li>
          </div>
        </ul>
      </section>
      <FullWidthSectionText
        text={businessServices.pullquote}
        className={`${styles.pullquote} dg-pullquote`}
      />
      <FullWidthSectionActionLink
        linkText={pickFirstAvailableString(
          businessServices.actionBanner.text,
          siteData.actionBanner.text
        )}
        to={pickFirstAvailableString(
          businessServices.actionBanner.link,
          siteData.actionBanner.link
        )}
        className="dg-actionBanner"
      />
      <SubscribeSection
        heading={pickFirstAvailableString(
          businessServices.subscribe.heading,
          siteData.subscribe.heading
        )}
        text={pickFirstAvailableString(
          businessServices.subscribe.text,
          siteData.subscribe.text
        )}
        className="dg-subscribe"
      />
    </>
  );
}

export async function getStaticProps() {
  const businessServices = await import(
    "data/pages/clientServices/businessServices.json"
  );

  return {
    props: { businessServices: businessServices.default },
  };
}
