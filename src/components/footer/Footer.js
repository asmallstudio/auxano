import React from "react";
import { Link } from "react-static";

import styles from "./footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className={`container ${styles.footerContainer}`}>
          <div className={`col-xs-12 ${styles.rowLink}`}>
            <nav className="">
              <ul className={styles.listLink}>
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
          <div className="rowInfo">
            <div className="col-xs-12">
              <ul className={styles.listInfo}>
                <li>
                  <p className={`N2 ${styles.addressText}`}>Address Line 1</p>
                  <p className={`N2 ${styles.addressText}`}>Address Line 2</p>
                </li>
                <li>
                  <p className="N2">2018 Trademark</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
