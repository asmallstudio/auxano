import React from "react";
import { Link } from "react-static";

import styles from "./footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footerContainer}>
        <div className={`container ${styles.footerRow}`}>
          <div className={`col-xs-12 col-md-9 ${styles.linkContainer}`}>
            <nav className="">
              <ul className={`N2 ${styles.linkList}`}>
                <li>
                  <Link to="#" activeClassName={styles.activeLink}>
                    News & Resources
                  </Link>
                </li>
                <li>
                  <Link to="#" activeClassName={styles.activeLink}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="#" activeClassName={styles.activeLink}>
                    Privacy & Terms
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className={`col-xs-12 ${styles.infoContainer}`}
            itemProp="address"
            itemScope
            itemType="http://schema.org/PostalAddress"
          >
            <p className={`N2 ${styles.addressText}`}>
              <span itemProp="streetAddress">
                10900 NE 4th Street, Suite 1950
              </span>
            </p>
            <p className={`N2 ${styles.addressText2}`}>
              <span itemProp="addressLocality">Bellevue</span>,{" "}
              <span itemProp="addressRegion">WA</span>{" "}
              <span itemProp="postalCode">98004</span>
              <meta itemProp="addressCountry" content="US" />
            </p>
            <p className={`N2 ${styles.copyrightText}`}>
              © {new Date().getFullYear()} Auxano Advisors LLC
            </p>
          </div>
          <div className={`col-xs-12 col-md-3 ${styles.backToTopContainer}`}>
            <span className="N2">
              <Link to="#" activeClassName={styles.activeLink}>
                Back to Top <BackToTopIcon />
              </Link>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

const BackToTopIcon = () => (
  <img
    className={styles.backToTopIcon}
    src="/assets/back-to-top.svg"
    width="45"
    height="15"
    alt="back-to-top-icon"
  />
);

export default Footer;
