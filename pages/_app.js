import React from "react";
import Head from "next/head";

import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import CoverSheet from "components/ui/coverSheet/CoverSheet";

import constants from "lib/constants.json";
import siteData from "data/pages/siteData.json";

import "components/styles/main.scss";
import "./_app.scss";

export default function App({ Component, pageProps }) {
  const [doNotShowCover, setDoNotShowCover] = React.useState(false);

  function checkCoverStateOnScroll() {
    if (window.scrollY > window.innerHeight) {
      setDoNotShowCover(true);
      if (doNotShowCover === true) {
        window.scrollTo(0, 0);
      }
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", checkCoverStateOnScroll, false);

    return () => {
      window.removeEventListener("scroll", checkCoverStateOnScroll, false);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{constants.siteMeta.title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#50b8b8" />
        <meta name="title" content={constants.siteMeta.title} />
        <meta name="og:title" content={constants.siteMeta.title} />
        <meta name="og:type" content="website" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="icon" href="/assets/favicons/favicon-64.png" />
        <link
          rel="mask-icon"
          href="/assets/favicons/favicons.svg"
          color="#50b8b8"
        />
      </Head>
      {doNotShowCover ? null : <CoverSheet siteData={siteData} />}
      <Header siteData={siteData} />
      <main
        className={`routesContainer doNotShowCoverSheet--${doNotShowCover}`}
      >
        <Component siteData={siteData} {...pageProps} />
      </main>
      <Footer siteData={siteData} />
    </>
  );
}