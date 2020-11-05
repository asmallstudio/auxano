import React from "react";
import Head from "next/head";
import {
  getFullPageTitle,
  formatRelativeDateString,
  createSlugFromTitleAndDate,
} from "@asmallstudio/utilities";
import { getDirectory, getSingleFileJson } from "@asmallstudio/utilities/node";
import constants from "lib/constants.json";

import JournalEntryItem from "components/ui/journalEntryItem/JournalEntryItem";
import styles from "./index.module.scss";

export default function Index({ siteData, posts }) {
  return (
    <>
      <Head>
        <title>{getFullPageTitle("Articles", constants.siteMeta.title)}</title>
        <meta name="description" content={siteData.siteDescription} />
      </Head>
      <div className={`container ${styles.articlePage}`}>
        <div className="row">
          <div className="col-xs-12">
            <h1 className="style-as-h3">Articles</h1>
          </div>
        </div>
        <ul className={`row ${styles.articleList}`}>
          {posts.map((post) => (
            <JournalEntryItem
              key={post.date}
              name={post.title}
              date={formatRelativeDateString(post.date)}
              link={`/news/${post.slug}/`}
              imgSrc={post.thumbnail}
              className={styles.indexArticle}
            />
          ))}
        </ul>
        {/* 
        totalPages > 1 && (
              <nav className={styles.pagination}>
                <h3>Pages</h3>
                <ul className={styles.pageList}>
                  {Array.from(new Array(totalPages), (d, i) => i).map(
                    page => {
                      const nextPage = page + 1;
                      return (
                        <li key={nextPage}>
                          <PaginationLink
                            to={`/news/page/${nextPage}`}
                            isCurrent={nextPage === currentPage}
                          >
                            {nextPage}
                          </PaginationLink>
                        </li>
                      );
                    }
                  )}
                </ul>
              </nav>
            )
      </div>
      */}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const newsEntries = await getDirectory(
    "./data/news",
    ".json",
    getSingleFileJson,
    createSlugFromTitleAndDate
  );

  // const newsEntriesPublished = newsEntries.filter(
  //   entry => entry.isPublished === true
  // );

  const newsEntriesSorted = newsEntries.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return aDate > bDate ? -1 : aDate < bDate ? 1 : 0;
  });

  return {
    props: { posts: newsEntriesSorted },
  };
}
