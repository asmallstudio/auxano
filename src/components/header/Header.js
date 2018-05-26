import React from "react";
import { Router, Link } from "react-static";

import styles from "./header.scss";

class Header extends React.Component {
  // Used to determine active anchor links on the specified path
  _determineHomeHashActive(path, hashLocation) {
    return (match, location) => {
      if (location.pathname !== "/") return false;
      return location.hash === hashLocation;
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={`row ${styles.row}`}>
          <div className="col-xs-4">
            <a href="#">
              <img
                src="/uploads/logo.png"
                alt="a small studio logo"
                className={styles["logo-image"]}
              />
            </a>
          </div>
          <nav className="right col-xs-8">
            <ul className={styles.list}>
              <li>
                <Link
                  to="/#who-we-are"
                  activeClassName={styles.activeLink}
                  isActive={this._determineHomeHashActive("/", "#who-we-are")}
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  to="/#what-we-do"
                  activeClassName={styles.activeLink}
                  isActive={this._determineHomeHashActive("/", "#what-we-do")}
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  to="/#our-partners"
                  activeClassName={styles.activeLink}
                  isActive={this._determineHomeHashActive("/", "#our-partners")}
                >
                  Our Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/#get-involved"
                  activeClassName={styles.activeLink}
                  isActive={this._determineHomeHashActive("/", "#get-involved")}
                >
                  Get Involved
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
