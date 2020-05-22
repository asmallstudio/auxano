import React from "react";
import Head from "next/head";
import { NextAmbiLink } from "@asmallstudio/components";
import {
  getFullPageTitle,
  pickFirstAvailableString
} from "@asmallstudio/utilities";
import constants from "lib/constants.json";

import styles from "./corporate-benefits-planning.module.scss";
import FullWidthSectionActionLink from "components/ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "components/ui/subscribeSection/SubscribeSection";

export default function CorporateBenefitsPlanning({ siteData, corporateBenefitsPlanning }) {
  return (
    <>
      <Head>
        <title>
          {getFullPageTitle(
            corporateBenefitsPlanning.pageTitle,
            constants.siteMeta.title
          )}
        </title>
        <meta
          name="description"
          content={pickFirstAvailableString(
            corporateBenefitsPlanning.pageDescription,
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
        className={`container--fluid ${styles.dingusDotContainer} ${styles.heroContainer} dg-hero`}
      >
        <div className="container">
          <div className="row">
            <div className={`col-xs-12 col-md-8 ${styles.heroTextContainer}`}>
              <h1>{corporateBenefitsPlanning.hero.title}</h1>
              <h2>{corporateBenefitsPlanning.hero.heading}</h2>
              <p>{corporateBenefitsPlanning.hero.description}</p>
            </div>
          </div>
          <div className={`${styles.dingusDot1} hidden-md-down`} />
        </div>
      </section>
      <section className="container dg-serviceInfoList">
        <ul className={`row ${styles.serviceInfoList}`}>
          <div className="col-xs-12 col-md-6">
            <li>{corporateBenefitsPlanning.serviceInfoList[0]}</li>
            <li>{corporateBenefitsPlanning.serviceInfoList[1]}</li>
            <li>{corporateBenefitsPlanning.serviceInfoList[2]}</li>
          </div>
          <div className="col-xs-12 col-md-6">
            <li>{corporateBenefitsPlanning.serviceInfoList[3]}</li>
            <li>{corporateBenefitsPlanning.serviceInfoList[4]}</li>
          </div>
        </ul>
      </section>
      <FullWidthSectionActionLink
        linkText={pickFirstAvailableString(
          corporateBenefitsPlanning.actionBanner.text,
          siteData.actionBanner.text
        )}
        to={pickFirstAvailableString(
          corporateBenefitsPlanning.actionBanner.link,
          siteData.actionBanner.link
        )}
        className="dg-actionBanner"
      />
      <SubscribeSection
        heading={pickFirstAvailableString(
          corporateBenefitsPlanning.subscribe.heading,
          siteData.subscribe.heading
        )}
        text={pickFirstAvailableString(
          corporateBenefitsPlanning.subscribe.text,
          siteData.subscribe.text
        )}
        className="dg-subscribe"
      />
    </>
  );
}

export async function getStaticProps() {
  const corporateBenefitsPlanning = await import("data/pages/clientServices/corporateBenefitsPlanning.json");

  return {
    props: { corporateBenefitsPlanning: corporateBenefitsPlanning.default },
  };
}