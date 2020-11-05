import React from "react";
import Head from "next/head";

import Banner from "components/banner/Banner";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import CoverSheet from "components/ui/coverSheet/CoverSheet";

import constants from "lib/constants.json";
import siteData from "data/pages/siteData.json";

import "components/styles/main.scss";
import "./_app.scss";

export default function App({ Component, pageProps }) {
  let initialState = [];
  if (typeof window !== "undefined") {
    initialState =
      window.localStorage.getItem("doNotShowCover") === "true" || false;
  }
  const [doNotShowCover, setDoNotShowCover] = React.useState(initialState);
  let resetScroll = !doNotShowCover;

  function checkCoverStateOnScroll() {
    if (typeof window !== "undefined") {
      // Check if scroll length is at least the height of the viewport, same as the cover sheet.
      if (window.scrollY > window.innerHeight) {
        // If so, the cover sheet has been scrolled by, reset scroll to top and set cover to not display.
        setDoNotShowCover(true);
        window.localStorage.setItem("doNotShowCover", "true");

        if (resetScroll) {
          window.scrollTo(0, 0);
          resetScroll = false;
        }
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
      <Banner siteData={siteData} />
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
