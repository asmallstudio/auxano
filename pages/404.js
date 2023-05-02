import React from "react";
import Head from "next/head";
import Link from "next/link";
import { getFullPageTitle } from "@asmallstudio/utilities";
import constants from "lib/constants.json";

import styles from "./404.module.scss";

export default function PageNotFound({ siteData }) {
  return (
    <>
      <Head>
        <title>
          {getFullPageTitle("Page not found", constants.siteMeta.title)}
        </title>
        <meta name="description" content={siteData.siteDescription} />
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1 className={styles.title}>That page cannot be found.</h1>
            <p className={styles.explainer}>
              Try going{" "}
              <Link href="/">
                home
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
