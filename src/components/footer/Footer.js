import React from "react";

import styles from "./footer.scss";
import theme from "../../lib/theme";
import Button from "../ui/button/Button";
import ThirdColumn from "../ui/thirdColumn/ThirdColumn";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <a className="anchor" id="footer" />
          <div className={styles.row}>
            <div className={`col-xs-12 ${styles.contentContainer}`}>
              <p className={styles.copywrite}>Copyright © 2018 Transitus</p>
              <div className={styles.socialContainer}>
                <a href="/contact-us">
                  <img src="/uploads/facebook-copy.svg" />
                </a>
                <a href="/contact-us">
                  <img src="/uploads/twitter-copy.svg" />
                </a>
                <a href="/contact-us">
                  <img src="/uploads/instagram-copy.svg" />
                </a>
                <a href="/contact-us">
                  <img src="/uploads/linked-in-copy.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
