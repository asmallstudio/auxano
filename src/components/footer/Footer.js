import React from "react";
import { Link } from "react-static";

import styles from "./footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className={`container ${styles.footerContainer}`}>
          <div className={`col-xs-12 ${styles.linkContainer}`}>
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
            <p className="N2">10900 NE 4th Street, Suite 1950</p>
            <p className="N2"> Bellevue, WA 98004</p>
            <p className="N2">2018 Trademark</p>
          </div>
          <div className={`col-xs-12 ${styles.backToTopContainer}`}>
            <ul className={`N2 ${styles.linkList}`}>
              <li>
                <Link to="/#" activeClassName={styles.activeLink}>
                  Back to Top
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
