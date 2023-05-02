import React from "react";
import Head from "next/head";
import {
  getFullPageTitle,
  pickFirstAvailableString,
} from "@asmallstudio/utilities";
import constants from "lib/constants.json";

import styles from "./legacy-planning.module.scss";
import Markdown from "react-markdown";
import FullWidthSectionText from "components/ui/fullWidthSectionText/FullWidthSectionText";
import FullWidthSectionActionLink from "components/ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "components/ui/subscribeSection/SubscribeSection";

export default function LegacyPlanning({ siteData, legacyPlanning }) {
  return (
    <>
      <Head>
        <title>
          {getFullPageTitle(legacyPlanning.pageTitle, constants.siteMeta.title)}
        </title>
        <meta
          name="description"
          content={pickFirstAvailableString(
            legacyPlanning.pageDescription,
            siteData.siteDescription
          )}
        />
      </Head>
      <section className={`container--fluid ${styles.heroContainer} dg-hero`}>
        <div className="container">
          <div className="row">
            <div className={`col-xs-12 col-md-9 ${styles.heroTextContainer}`}>
              <h1>{legacyPlanning.hero.title}</h1>
              <p className="style-as-h2">{legacyPlanning.hero.subtitle}</p>
              <p>{legacyPlanning.hero.text}</p>
            </div>
          </div>
        </div>
      </section>
      <FullWidthSectionText
        text={legacyPlanning.body.description1}
        className={`dg-description1 ${styles.pageBody}`}
      />
      <section className="container">
        <div className="row">
          <div className={`col-xs-12 ${styles.textPlain}`}>
            <Markdown
              allowedElements={["text", "p", "em", "strong"]}
              className={styles.pageBody}
            >
              {legacyPlanning.body.description2}
            </Markdown>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-xs-12">
            <h2 className={styles.optionsHeader}>
              {legacyPlanning.body.options.heading}
            </h2>
          </div>
          <div className="row">
            <ul className={`col-xs-12 ${styles.textList} dg-list`}>
              {legacyPlanning.body.options.list.map((item, i) => (
                <li key={i} className="style-as-p">
                  <Markdown
                    allowedElements={["text", "em", "strong"]}
                    unwrapDisallowed={true}
                  >
                    {item}
                  </Markdown>
                </li>
              ))}
            </ul>
          </div>
          <div className="row">
            <div className={`col-xs-12 ${styles.textPlain}`}>
              <p className={styles.optionsHeader}>{legacyPlanning.body.coda}</p>
            </div>
          </div>
        </div>
      </section>
      <FullWidthSectionText
        text={legacyPlanning.body.closing}
        className={`${styles.pageBodyClosing} dg-closing`}
      />
      <FullWidthSectionActionLink
        linkText={pickFirstAvailableString(
          legacyPlanning.actionBanner.text,
          siteData.actionBanner.text
        )}
        to={pickFirstAvailableString(
          legacyPlanning.actionBanner.link,
          siteData.actionBanner.link
        )}
        className="dg-actionBanner"
      />
      <SubscribeSection
        heading={pickFirstAvailableString(
          legacyPlanning.subscribe.heading,
          siteData.subscribe.heading
        )}
        text={pickFirstAvailableString(
          legacyPlanning.subscribe.text,
          siteData.subscribe.text
        )}
        className="dg-subscribe"
      />
    </>
  );
}

export async function getStaticProps() {
  const legacyPlanning = await import("data/pages/legacyPlanning.json");

  return {
    props: { legacyPlanning: legacyPlanning.default },
  };
}
