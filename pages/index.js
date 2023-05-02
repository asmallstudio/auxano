import React from "react";
import Head from "next/head";
import { pickFirstAvailableString } from "@asmallstudio/utilities";

import styles from "./index.module.scss";
import CallToActionLink from "components/ui/callToActionLink/CallToActionLink";
import FullWidthSectionText from "components/ui/fullWidthSectionText/FullWidthSectionText";
import OneThirdColumn from "components/ui/oneThirdColumn/OneThirdColumn";
import FullWidthSectionActionLink from "components/ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "components/ui/subscribeSection/SubscribeSection";

export default function Home({ siteData, home }) {
  return (
    <>
      <Head>
        <meta name="description" content={siteData.siteDescription} />
        <script defer src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <div className={`container--fluid ${styles.heroContainer}`}>
        <div className={`${styles.heroImageContainer} ${styles.dingusDotHero}`}>
          <img src={home.hero.image} className={styles.heroImage} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div
              className={`col-xs-12 col-md-6 ${styles.heroTextContainer} dg-hero`}
            >
              <h1>{home.hero.title}</h1>
              <p>{home.hero.subtitle}</p>
              <CallToActionLink to={home.hero.ctaLink}>
                {home.hero.ctaText}
              </CallToActionLink>
            </div>
          </div>
        </div>
      </div>
      <FullWidthSectionText text={home.definition} className="dg-definition" />
      <FullWidthSectionText
        text={home.pullquote}
        className={`${styles.pullquote} dg-pullquote`}
      />
      <section className="container dg-services">
        <div className={`${styles.threecols} row`}>
          <OneThirdColumn data={home.callouts.item1} className="dg-item1" />
          <OneThirdColumn data={home.callouts.item2} className="dg-item2" />
          <OneThirdColumn data={home.callouts.item3} className="dg-item3" />
        </div>
      </section>
      <FullWidthSectionActionLink
        linkText={pickFirstAvailableString(
          home.actionBanner.text,
          siteData.actionBanner.text
        )}
        to={pickFirstAvailableString(
          home.actionBanner.link,
          siteData.actionBanner.link
        )}
        className="dg-actionBanner"
      />
      <SubscribeSection
        heading={pickFirstAvailableString(
          home.subscribe.heading,
          siteData.subscribe.heading
        )}
        text={pickFirstAvailableString(
          home.subscribe.text,
          siteData.subscribe.text
        )}
        className="dg-subscribe"
      />
    </>
  );
}

export async function getStaticProps() {
  const home = await import("data/pages/home.json");

  return {
    props: { home: home.default },
  };
}
