import React from "react";
import Head from "next/head";
import {
  getFullPageTitle,
  pickFirstAvailableString,
} from "@asmallstudio/utilities";
import constants from "lib/constants.json";

import styles from "./our-approach.module.scss";
import InfoSectionRow from "components/ui/infoSectionRow/InfoSectionRow";
import LinkWithArrow from "components/ui/linkWithArrow/LinkWithArrow";
import FullWidthSectionActionLink from "components/ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "components/ui/subscribeSection/SubscribeSection";

export default function OurApproach({ siteData, ourApproach }) {
  return (
    <>
      <Head>
        <title>
          {getFullPageTitle(ourApproach.pageTitle, constants.siteMeta.title)}
        </title>
        <meta
          name="description"
          content={pickFirstAvailableString(
            ourApproach.pageDescription,
            siteData.siteDescription
          )}
        />
      </Head>
      <section
        className={`container--fluid ${styles.dingusDotContainer} ${styles.heroContainer} dg-hero`}
      >
        <div className="container">
          <div className="row">
            <div className={`col-xs-12 col-md-8 ${styles.heroTextContainer}`}>
              <h1>{ourApproach.hero.title}</h1>
            </div>
          </div>
        </div>
        <div className={styles.dingusDot} />
      </section>
      <section className="container--fluid">
        <div className="container">
          <InfoSectionRow
            imgSrc={ourApproach.items.item1.image.src}
            imgAlt={ourApproach.items.item1.image.alt}
            className="dg-item1"
          >
            <h2>{ourApproach.items.item1.heading}</h2>
            <p>{ourApproach.items.item1.body}</p>
            {typeof ourApproach.items.item1.link !== "undefined" && (
              <LinkWithArrow
                to={ourApproach.items.item1.link}
                className={styles.moreLink}
              >
                Learn More
              </LinkWithArrow>
            )}
          </InfoSectionRow>
          <InfoSectionRow
            imgSrc={ourApproach.items.item2.image.src}
            imgAlt={ourApproach.items.item2.image.alt}
            className="dg-item2"
          >
            <h2>{ourApproach.items.item2.heading}</h2>
            <p>{ourApproach.items.item2.body}</p>
            {typeof ourApproach.items.item2.link !== "undefined" && (
              <LinkWithArrow
                to={ourApproach.items.item2.link}
                className={styles.moreLink}
              >
                Learn More
              </LinkWithArrow>
            )}
          </InfoSectionRow>
          <InfoSectionRow
            imgSrc={ourApproach.items.item3.image.src}
            imgAlt={ourApproach.items.item3.image.alt}
            className="dg-item3"
          >
            <h2>{ourApproach.items.item3.heading}</h2>
            <p>{ourApproach.items.item3.body}</p>
            {typeof ourApproach.items.item3.link !== "undefined" && (
              <LinkWithArrow
                to={ourApproach.items.item3.link}
                className={styles.moreLink}
              >
                Learn More
              </LinkWithArrow>
            )}
          </InfoSectionRow>
          <InfoSectionRow
            imgSrc={ourApproach.items.item4.image.src}
            imgAlt={ourApproach.items.item4.image.alt}
            className="dg-item4"
          >
            <h2>{ourApproach.items.item4.heading}</h2>
            <p>{ourApproach.items.item4.body}</p>
            {typeof ourApproach.items.item4.link !== "undefined" && (
              <LinkWithArrow
                to={ourApproach.items.item4.link}
                className={styles.moreLink}
              >
                Learn More
              </LinkWithArrow>
            )}
          </InfoSectionRow>
        </div>
      </section>
      <FullWidthSectionActionLink
        linkText={pickFirstAvailableString(
          ourApproach.actionBanner.text,
          siteData.actionBanner.text
        )}
        to={pickFirstAvailableString(
          ourApproach.actionBanner.link,
          siteData.actionBanner.link
        )}
        className="dg-actionBanner"
      />
      <SubscribeSection
        heading={pickFirstAvailableString(
          ourApproach.subscribe.heading,
          siteData.subscribe.heading
        )}
        text={pickFirstAvailableString(
          ourApproach.subscribe.text,
          siteData.subscribe.text
        )}
        className="dg-subscribe"
      />
    </>
  );
}

export async function getStaticProps() {
  const ourApproach = await import("data/pages/ourApproach.json");

  return {
    props: { ourApproach: ourApproach.default },
  };
}
