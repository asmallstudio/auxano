import React from "react";
import Head from "next/head";
import {
  getFullPageTitle,
  pickFirstAvailableString
} from "@asmallstudio/utilities";
import constants from "lib/constants.json";

import Markdown from "react-markdown";
import styles from "./disclosures.module.scss";

export default function Disclosures({ siteData, disclosures }) {


  return (
    <>
      <Head>
        <title>
          {getFullPageTitle(disclosures.pageTitle, constants.siteMeta.title)}
        </title>
        <meta
          name="description"
          content={pickFirstAvailableString(
            disclosures.pageDescription,
            siteData.siteDescription
          )}
        />
      </Head>
      <div className={`container ${styles.articleContainer}`}>
        <div className="row">
          <article className="col-xs-12">
            <h1 className={styles.articleTitle}>{disclosures.title}</h1>
            <div className={styles.articleContent}>
              <Markdown>{disclosures.content}</Markdown>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const disclosures = await import("data/pages/disclosures.json");

  return {
    props: { disclosures: disclosures.default },
  };
}
