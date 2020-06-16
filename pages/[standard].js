import React from "react";
import Head from "next/head";
import {
  getFullPageTitle,
  pickFirstAvailableString,
} from "@asmallstudio/utilities";
import { getDirectory, getSingleFileJson } from "@asmallstudio/utilities/node";
import constants from "lib/constants.json";

import Markdown from "react-markdown";
import styles from "./standard.module.scss";

export default function Standard({ siteData, routeData }) {
  return (
    <>
      <Head>
        <title>
          {getFullPageTitle(routeData.pageTitle, constants.siteMeta.title)}
        </title>
        <meta
          name="description"
          content={pickFirstAvailableString(
            routeData.pageDescription,
            siteData.siteDescription
          )}
        />
      </Head>
      <div className={`container ${styles.articleContainer}`}>
        <div className="row">
          <article className="col-xs-12">
            <h1 className={styles.articleTitle}>{routeData.title}</h1>
            <div className={styles.articleContent}>
              <Markdown>{routeData.content}</Markdown>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const routeData = await import(`data/misc/${params.standard}.json`);

  return {
    props: { routeData: routeData.default }
  };
}

export async function getStaticPaths() {
  const sanitizeString = string => {
    return string
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  const findPath = data => {
    return sanitizeString(data.path);
  };

  const directoryData = await getDirectory(
    "./data/misc",
    ".json",
    getSingleFileJson,
    findPath
  );
  const directoryPaths = directoryData.reduce((pathsAccumulator, page) => {
    pathsAccumulator.push(
      {
        params: {
          standard: page.slug
        }
      }
    );

    return pathsAccumulator
  }, []);

  return {
    fallback: false,
    paths: directoryPaths
  };
}
