// pages/_app.js

import React from "react";
import Head from "next/head";
import { useRouter } from "next/router"; // <-- ADD

import Banner from "components/banner/Banner";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import CoverSheet from "components/ui/coverSheet/CoverSheet";

import constants from "lib/constants.json";
import siteData from "data/pages/siteData.json";

import "components/styles/main.scss";
import "./_app.scss";

export default function App({ Component, pageProps }) {
  const router = useRouter(); // <-- ADD

  let initialState = [];
  if (typeof window !== "undefined") {
    initialState =
      window.localStorage.getItem("doNotShowCover") === "true" || false;
  }
  const [doNotShowCover, setDoNotShowCover] = React.useState(initialState);
  let resetScroll = !doNotShowCover;

  // --- ADD: Olson redirect modal state + open/close helpers ---
  const [showOlsonModal, setShowOlsonModal] = React.useState(false);

  function closeOlsonModal() {
    setShowOlsonModal(false);

    if (typeof window !== "undefined") {
      // optional: don’t show again in this browser
      window.localStorage.setItem("olsonRedirectModalDismissed", "true");

      // optional: clean up the URL by removing ?from=olson without reloading
      try {
        const url = new URL(window.location.href);
        url.searchParams.delete("from");
        window.history.replaceState({}, "", url.pathname + url.search + url.hash);
      } catch (e) {
        // ignore
      }
    }
  }

  React.useEffect(() => {
    if (!router.isReady) return;
    if (typeof window === "undefined") return;

    const dismissed =
      window.localStorage.getItem("olsonRedirectModalDismissed") === "true";

    if (router.query?.from === "olson" && !dismissed) {
      setShowOlsonModal(true);
    }
  }, [router.isReady, router.query?.from]);
  // --- END ADD ---

  React.useEffect(() => {
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

      {/* ADD: modal overlay (renders ABOVE CoverSheet and everything else) */}
      {showOlsonModal ? (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
          onClick={closeOlsonModal}
        >
          <div
            style={{
              width: "min(720px, 100%)",
              background: "#fff",
              borderRadius: 12,
              padding: 20,
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              // <h2 style={{ margin: 0, fontSize: 22, lineHeight: 1.2 }}>
              //   Olson Investments has moved
              // </h2>
              <button
                type="button"
                onClick={closeOlsonModal}
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: 20,
                  cursor: "pointer",
                  lineHeight: 1,
                }}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
              
              <p
                style={{
                  marginTop: 12,
                  marginBottom: 0,
                  fontSize: 16,
                  lineHeight: 1.5,
                }}
              >
                We’re so glad you’re here. If you were redirected from Olson Investment Advisors, welcome. Our team is excited to continue supporting you on your financial journey.
                <br /><br />
                At Auxano Advisors, we believe wealth management is about more than numbers – it’s about building a relationship you can trust and creating a plan that supports your values and life goals. We invite you to explore our resources, meet our team, and see how we can help you move forward with clarity and confidence.
                <br /><br />
                If you’d like to start a conversation, we’d love to hear from you.
                <br /><br />
                <strong>(800) 642-1341</strong><br />
                <a href="mailto:info@auxanoadvisors.com">info@auxanoadvisors.com</a>
              </p>


            <div style={{ marginTop: 16, display: "flex", justifyContent: "flex-end" }}>
              <button
                type="button"
                onClick={closeOlsonModal}
                style={{
                  border: "1px solid rgba(0,0,0,0.15)",
                  background: "#fff",
                  padding: "10px 14px",
                  borderRadius: 10,
                  cursor: "pointer",
                  fontSize: 14,
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {doNotShowCover ? null : <CoverSheet siteData={siteData} />}
      <Banner siteData={siteData} />
      <Header siteData={siteData} />
      <main className={`routesContainer doNotShowCoverSheet--${doNotShowCover}`}>
        <Component siteData={siteData} {...pageProps} />
      </main>
      <Footer siteData={siteData} />
    </>
  );
}
