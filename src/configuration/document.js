import React from "react";

/**
 * Root document configuration
 * https://react-static.js.org/docs/config#document
 * @param {object} param0 React Static document object
 * @returns {object} React element representing the root document
 * of the website
 */
const createDocument = ({ Html, Head, Body, children, renderMeta }) => {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#50b8b8" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="icon" href="/assets/favicons/favicon-64.png" />
        <link
          rel="mask-icon"
          href="/assets/favicons/favicons.svg"
          color="#50b8b8"
        />
        {renderMeta.styleTags}
      </Head>
      <Body>{children}</Body>
    </Html>
  );
};

export default createDocument;
