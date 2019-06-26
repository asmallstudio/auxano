import React from "react";
import { Root, Routes, Head } from "react-static";
import { Match } from "@reach/router";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import constants from "../lib/constants.json";
import CoverSheet from "./ui/coverSheet/CoverSheet";

import "./styles/main.scss";
import appStyles from "./app.scss";

const ScrollRestoration = () => {
  React.useEffect(() => {
    if (window.location.hash) {
      return;
    }
    window.scrollTo(0, 0);
  });
  return null;
};

const App = () => {
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
    <Root>
      <React.Suspense fallback={<span>Loading…</span>}>
        <React.Fragment>
          <Head>
            <title>{constants.siteMeta.title}</title>
            <meta name="title" content={constants.siteMeta.title} />
            <meta name="og:title" content={constants.siteMeta.title} />
          </Head>

          {doNotShowCover ? null : (
            <React.Suspense fallback={<span>Loading Cover…</span>}>
              <CoverSheet />
            </React.Suspense>
          )}
          <React.Suspense fallback={<span>Loading Heading…</span>}>
            <Header />
          </React.Suspense>
          <main
            className={`${appStyles.routesContainer} doNotShowCoverSheet--${doNotShowCover}`}
          >
            <React.Suspense fallback={<span>Loading…</span>}>
              <Match path="">
                {props => (
                  <>
                    <ScrollRestoration {...props} />
                  </>
                )}
              </Match>
              <Routes />
            </React.Suspense>
          </main>
          <React.Suspense fallback={<span>Loading Footer…</span>}>
            <Footer />
          </React.Suspense>
        </React.Fragment>
      </React.Suspense>
    </Root>
  );
};

export default App;
