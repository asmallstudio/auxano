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
                  <Link to="/#" activeClassName={styles.activeLink}>
                    News & Resources
                  </Link>
                </li>
                <li>
                  <Link to="/#" activeClassName={styles.activeLink}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/#" activeClassName={styles.activeLink}>
                    Privacy & Terms
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={`col-xs-12 ${styles.infoContainer}`}>
            <p className={`N2 ${styles.addressText}`}>
              10900 NE 4th Street, Suite 1950
            </p>
            <p className={`N2 ${styles.addressText}`}> Bellevue, WA 98004</p>
            <p className={`N2 ${styles.copyrightText}`}>
              © 2018 Auxano Advisors LLC
            </p>
          </div>
          <div className={`col-xs-12 col-md-3 ${styles.backToTopContainer}`}>
            <Link to="/#" activeClassName={styles.activeLink}>
              <span className="N2">Back to Top</span>
            </Link>
            <BackToTopIcon />
          </div>
        </div>
      </footer>
    );
  }
}

const BackToTopIcon = () => (
  <img
    className={styles.backToTopIcon}
    src="back-to-top.svg"
    width="45"
    height="15"
    alt="back-to-top-icon"
  />
);

export default Footer;
