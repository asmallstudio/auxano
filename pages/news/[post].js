import React from "react";
import Head from "next/head";
import {
  getFullPageTitle,
  createSlugFromTitleAndDate,
} from "@asmallstudio/utilities";
import { getDirectory, getSingleFileJson } from "@asmallstudio/utilities/node";
import { NextAmbiLink, NextMarkdownLink } from "@asmallstudio/components";
import constants from "lib/constants.json";

import Markdown from "react-markdown";
import styles from "./post.module.scss";

export default function Post({ siteData, post }) {
  return (
    <>
      <Head>
        <title>{getFullPageTitle(post.title, constants.siteMeta.title)}</title>
        <meta name="description" content={siteData.siteDescription} />
      </Head>
      <div className={`container ${styles.articleContainer}`}>
        <div className="row">
          <div
            className={`col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 ${styles.articleListLinkContainer}`}
          >
            <NextAmbiLink
              href="/news"
              className={`style-as-h3 ${styles.articleListLink}`}
            >
              News & Resources
            </NextAmbiLink>
          </div>
          <article
            className={`col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 ${styles.newsArticle}`}
          >
            <h1>{post.title}</h1>
            <Markdown renderers={{ link: NextMarkdownLink }}>
              {post.body}
            </Markdown>
          </article>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const newsEntries = await getDirectory(
    "./data/news",
    ".json",
    getSingleFileJson,
    createSlugFromTitleAndDate
  );

  const [post] = newsEntries.filter((entry) => entry.slug === params.post);

  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const directoryData = await getDirectory(
    "./data/news",
    ".json",
    getSingleFileJson,
    createSlugFromTitleAndDate
  );

  const directoryPaths = directoryData.reduce((pathsAccumulator, page) => {
    pathsAccumulator.push({
      params: {
        post: page.slug,
      },
    });

    return pathsAccumulator;
  }, []);

  return {
    fallback: false,
    paths: directoryPaths,
  };
}
