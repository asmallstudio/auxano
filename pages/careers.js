import React from "react";
import Head from "next/head";
import {
  getFullPageTitle,
  pickFirstAvailableString,
} from "@asmallstudio/utilities";
import { NextMarkdownLink } from "@asmallstudio/components";
import constants from "lib/constants.json";

import styles from "./careers.module.scss";
import Markdown from "react-markdown";
import FullWidthSectionActionLink from "components/ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "components/ui/subscribeSection/SubscribeSection";

export default function Careers({ siteData, careers }) {
  return (
    <>
      <Head>
        <title>
          {getFullPageTitle(careers.pageTitle, constants.siteMeta.title)}
        </title>
        <meta
          name="description"
          content={pickFirstAvailableString(
            careers.pageDescription,
            siteData.siteDescription
          )}
        />
      </Head>
      <section className={`container--fluid ${styles.heroContainer} dg-hero`}>
        <div className={`${styles.heroImageContainer} ${styles.dingusDotHero}`}>
          <img src={careers.hero.image} className={styles.heroImage} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className={`col-xs-12 col-md-6 ${styles.heroTextContainer}`}>
              <h1>{careers.hero.title}</h1>
              <p>
                <Markdown
                  allowedElements={["text", "p", "a"]}
                  components={{ a: NextMarkdownLink }}
                  children={careers.hero.subtitle} // eslint-disable-line react/no-children-prop
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <FullWidthSectionActionLink
        linkText={pickFirstAvailableString(
          careers.actionBanner.text,
          siteData.actionBanner.text
        )}
        to={pickFirstAvailableString(
          careers.actionBanner.link,
          siteData.actionBanner.link
        )}
        className="dg-actionBanner"
      />
      <SubscribeSection
        heading={pickFirstAvailableString(
          careers.subscribe.heading,
          siteData.subscribe.heading
        )}
        text={pickFirstAvailableString(
          careers.subscribe.text,
          siteData.subscribe.text
        )}
        className="dg-subscribe"
      />
    </>
  );
}

export async function getStaticProps() {
  const careers = await import("data/pages/careers.json");

  return {
    props: { careers: careers.default },
  };
}
