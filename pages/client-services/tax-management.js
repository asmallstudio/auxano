import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  getFullPageTitle,
  pickFirstAvailableString,
} from "@asmallstudio/utilities";
import constants from "lib/constants.json";

import styles from "./tax-management.module.scss";
import FullWidthSectionActionLink from "components/ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "components/ui/subscribeSection/SubscribeSection";

export default function TaxManagement({ siteData, taxManagement }) {
  return (
    <>
      <Head>
        <title>
          {getFullPageTitle(taxManagement.pageTitle, constants.siteMeta.title)}
        </title>
        <meta
          name="description"
          content={pickFirstAvailableString(
            taxManagement.pageDescription,
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
              <h1 className="style-as-h3">{taxManagement.hero.name}</h1>
              <p className="style-as-h1">{taxManagement.hero.title}</p>
            </div>
          </div>
        </div>
        <div className={`${styles.dingusDot1} hidden-md-down`} />
      </section>
      <section className="dg-serviceInfo">
        <div className={`container--fluid ${styles.serviceInfoContainer}`}>
          <div className="container">
            <div className={`row ${styles.serviceInfoRow}`}>
              <div className="col-xs-12">
                <p>{taxManagement.serviceInfo.section1}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={`row ${styles.infoSectionRow}`}>
            <div
              className={`col-xs-12 col-md-6 col-lg-5 ${styles.infoSectionColImage}`}
            >
              <div
                className={`${styles.imgContainer} ${styles.dingusDotRelative} ${styles.dingusDot2}`}
              >
                <img
                  className={`${styles.infoSectionImage}`}
                  src={taxManagement.serviceInfo.section2.image.src}
                  alt={taxManagement.serviceInfo.section2.image.alt}
                />
              </div>
            </div>
            <div className="col-lg-1 hidden-lg-down" />
            <div className={`col-xs-12 col-md-6 ${styles.infoSectionColText}`}>
              <p className="style-as-h2">
                {taxManagement.serviceInfo.section2.description}
              </p>
            </div>
          </div>
        </div>
        <div className={`container--fluid ${styles.serviceInfoContainer}`}>
          <div className="container">
            <div className={`row ${styles.serviceInfoRow}`}>
              <div className="col-xs-12">
                <p className="style-as-h2">
                  {taxManagement.serviceInfo.section3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FullWidthSectionActionLink
        linkText={pickFirstAvailableString(
          taxManagement.actionBanner.text,
          siteData.actionBanner.text
        )}
        to={pickFirstAvailableString(
          taxManagement.actionBanner.link,
          siteData.actionBanner.link
        )}
        className="dg-actionBanner"
      />
      <SubscribeSection
        heading={pickFirstAvailableString(
          taxManagement.subscribe.heading,
          siteData.subscribe.heading
        )}
        text={pickFirstAvailableString(
          taxManagement.subscribe.text,
          siteData.subscribe.text
        )}
        className="dg-subscribe"
      />
    </>
  );
}

export async function getStaticProps() {
  const taxManagement = await import(
    "data/pages/clientServices/taxManagement.json"
  );

  return {
    props: { taxManagement: taxManagement.default },
  };
}
