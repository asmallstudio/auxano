import React from "react";
import Head from "next/head";
import {
  getFullPageTitle,
  pickFirstAvailableString
} from "@asmallstudio/utilities";
import constants from "lib/constants.json";

import CallToActionLink from "components/ui/callToActionLink/CallToActionLink";
import FullWidthSectionText from "components/ui/fullWidthSectionText/FullWidthSectionText";
import FullWidthSectionActionLink from "components/ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "components/ui/subscribeSection/SubscribeSection";

import styles from "./about-us.module.scss";

export default function AboutUs({ siteData, aboutUs }) {
  const [activeOrg, setActiveOrg] = React.useState(0);

  return (
    <>
      <Head>
        <title>
          {getFullPageTitle(aboutUs.pageTitle, constants.siteMeta.title)}
        </title>
        <meta
          name="description"
          content={pickFirstAvailableString(
            aboutUs.pageDescription,
            siteData.siteDescription
          )}
        />
      </Head>
      <section className={`container--fluid ${styles.heroContainer} dg-hero`}>
        <div
          className={`${styles.heroImageContainer} ${styles.dingusDotHero}`}
        >
          <img src={aboutUs.hero.image} className={styles.heroImage} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className={`col-xs-12 col-md-6 ${styles.heroTextContainer}`}>
              <h1>{aboutUs.hero.title}</h1>
              <p>{aboutUs.hero.subtitle}</p>
              <CallToActionLink to={aboutUs.hero.ctaLink}>
                {aboutUs.hero.ctaText}
              </CallToActionLink>
            </div>
          </div>
        </div>
      </section>
      <FullWidthSectionText text={aboutUs.textSection} />
      <section className="container dg-infoSection">
        <div className={`row ${styles.infoSectionRow}`}>
          <div
            className={`col-xs-12 col-md-6 col-lg-5 ${styles.infoSectionColImage}`}
          >
            <div
              className={`${styles.imgContainer} ${styles.dingusDotRelative} ${styles.dingusDot}`}
            >
              <img
                className={`${styles.infoSectionImage}`}
                src={aboutUs.infoSection.image.src}
                alt={aboutUs.infoSection.image.alt}
              />
            </div>
          </div>
          <div className="col-lg-1 hidden-lg-down" />
          <div className={`col-xs-12 col-md-6 ${styles.infoSectionColText}`}>
            <h2>{aboutUs.infoSection.heading}</h2>
            <p>{aboutUs.infoSection.text}</p>
            <ul className={styles.communityOrgs}>
              {aboutUs.infoSection.items.map((item, i) => (
                <li className={`key-${i}`} key={i}>
                  <img
                    src={item.logo}
                    alt=""
                    className={
                      i === activeOrg ? styles.activeOrg : null
                    }
                    onClick={() => setActiveOrg(i)}
                  />
                  {i === activeOrg && (
                    <div className={styles.itemText}>
                      <div className={styles.itemName}>{item.name}</div>
                      <p className={styles.itemDesc}>{item.desc}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <FullWidthSectionActionLink
        linkText={pickFirstAvailableString(
          aboutUs.actionBanner.text,
          siteData.actionBanner.text
        )}
        to={pickFirstAvailableString(
          aboutUs.actionBanner.link,
          siteData.actionBanner.link
        )}
        className="dg-actionBanner"
      />
      <SubscribeSection
        heading={pickFirstAvailableString(
          aboutUs.subscribe.heading,
          siteData.subscribe.heading
        )}
        text={pickFirstAvailableString(
          aboutUs.subscribe.text,
          siteData.subscribe.text
        )}
        className="dg-subscribe"
      />
    </>
  );
}

export async function getStaticProps() {
  const aboutUs = await import("data/pages/aboutUs.json");

  return {
    props: { aboutUs: aboutUs.default },
  };
}
