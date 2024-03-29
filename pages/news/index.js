import React from "react";
import Head from "next/head";
import {
  getFullPageTitle,
  formatRelativeDateString,
  createSlugFromTitleAndDate,
} from "@asmallstudio/utilities";
import { getDirectory, getSingleFileJson } from "@asmallstudio/utilities/node";
import Link from "next/link";
import constants from "lib/constants.json";

// import JournalEntryItem from "components/ui/journalEntryItem/JournalEntryItem";
import LinkWithArrow from "components/ui/linkWithArrow/LinkWithArrow";
import styles from "./index.module.scss";

export default function Index({ siteData, posts }) {
  return (
    <>
      <Head>
        <title>{getFullPageTitle("News", constants.siteMeta.title)}</title>
        <meta name="description" content={siteData.siteDescription} />
      </Head>
      <div className={`container ${styles.articlePage}`}>
        <div className="row">
          <div className={`col-xs-12 ${styles.articleList}`}>
            <h1 className="style-as-h3">News & Resources</h1>
            <ul>
              {posts.map((post) => (
                <li key={post.slug} className={styles.indexArticle}>
                  <div className={styles.titleAndLinkContainer}>
                    <Link
                      href="/news/[post]"
                      as={`/news/${post.slug}`}
                      className={styles.postTitle}
                    >
                      {post.title}
                    </Link>
                    <LinkWithArrow
                      to="/news/[post]"
                      as={`/news/${post.slug}`}
                      className={styles.arrowLink}
                    >
                      Read more
                    </LinkWithArrow>
                  </div>
                  <div className={styles.metaInfoContainer}>
                    <p>{formatRelativeDateString(post.date)}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* totalPages > 1 && (
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
          ) */}
          </div>
        </div>
      </div>
      {/* 
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
