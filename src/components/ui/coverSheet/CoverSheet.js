import React from "react";

import styles from "./coverSheet.scss";

const CoverSheet = ({
  hero = "Transcending Wealth Transforming Lives",
  tagline = "Private Wealth Management",
  ...restProps
}) => (
  <section className={`container--fluid ${styles.coverSheet}`} {...restProps}>
    <div className={`container ${styles.coverSheetContent}`}>
      <img
        alt="Auxano Advisors"
        src="/assets/auxano-logo-white.svg"
        height="48"
        width="125"
      />
      <div className={styles.text}>
        <h1>{hero}</h1>
        <p>{tagline}</p>
      </div>
      <img
        className={styles.arrow}
        alt=""
        src="/assets/arrow-down.svg"
        height="18"
        width="14"
      />
    </div>
  </section>
);

export default CoverSheet;
