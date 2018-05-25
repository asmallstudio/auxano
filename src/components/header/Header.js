import React from "react";
import { Router, Link } from "react-static";

import styles from "./header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={`row ${styles.row}`}>
          <div className="col-xs-4">
            <img
              src="/uploads/logo.png"
              alt="a small studio logo"
              className={styles["logo-image"]}
            />
          </div>
          <nav className="right col-xs-8">
            <ul className={styles.list}>
              <li>
                <a href="#">Our Mission</a>
              </li>
              <li>
                <a href="#">What We Do</a>
              </li>
              <li>
                <a href="#">Our Partners</a>
              </li>
              <li>
                <a href="#">Get Involved</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
