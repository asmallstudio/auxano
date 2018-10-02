import React from "react";

import styles from "./coverSheet.scss";

class CoverSheet extends React.Component {
  _slideCover = () => {
    window.removeEventListener("scroll", this._checkCoverStateOnScroll, false);
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  render() {
    const {
      hero = "Transcending Wealth. Transforming Lives.",
      tagline = "Private Wealth Management",
      updateDoNotShowCoverState
    } = this.props;
    return (
      <section
        className={`container--fluid ${styles.coverSheet}`}
        onClick={() => this._slideCover(updateDoNotShowCoverState)}
      >
        <div className="container">
          <div className={`col-xs-12 ${styles.coverSheetContent}`}>
            <img
              alt="Auxano Advisors"
              src="/assets/auxano-logo-white.svg"
              height="48"
              width="125"
              className={styles.logo}
            />
            <div className={styles.text}>
              <h1>{hero}</h1>
              <p>{tagline}</p>
            </div>
            <button
              onClick={() => this._slideCover(updateDoNotShowCoverState)}
              className={styles.scrollButton}
            >
              <img
                className={styles.arrow}
                alt=""
                src="/assets/arrow-down.svg"
                height="22"
                width="17"
              />
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default CoverSheet;
