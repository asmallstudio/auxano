import React from "react";
import { withSiteData } from "react-static";
import { Link } from "@reach/router";
import BackToTopIcon from "./BackToTopIcon";
import constants from "../../lib/constants.json";

import { phoneNumberUnformat } from "../../lib/utils/copy";

import styles from "./footer.scss";

class Footer extends React.Component {
  render() {
    const { siteData } = this.props;
    return (
      <footer
        className={styles.footerContainer}
        itemScope
        itemType="http://schema.org/Organization"
      >
        <meta itemProp="name" content="Auxano Advisors" />
        <meta itemProp="url" content={constants.siteMeta.url} />
        <div className={`container ${styles.footerRow}`}>
          <div className={`col-xs-12 col-md-9 ${styles.infoContainer}`}>
            <nav>
              <h3 className="sr-text">Site Navigation</h3>
              <ul className={`N2 ${styles.linkList}`}>
                <li>
                  <Link to="/team" activeClassName={styles.activeLink}>
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/news" activeClassName={styles.activeLink} exact>
                    News & Resources
                  </Link>
                </li>
                <li>
                  <Link to="/careers" activeClassName={styles.activeLink}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" activeClassName={styles.activeLink}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-terms" activeClassName={styles.activeLink}>
                    Privacy & Terms
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={`col-xs-12 col-md-3 ${styles.infoContainer}`}>
            <h3 className="sr-text">Social Links</h3>
            <ul className={`N2 ${styles.linkList}`}>
              <li>
                <Link
                  to="https://www.linkedin.com/company/auxano-advisors-llc/"
                  rel="me"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link to="https://facebook.com/auxanoadvisors/" rel="me">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={`container ${styles.footerRow}`}>
          <div
            className={`col-xs-12 col-md-9 ${styles.infoContainer} ${
              styles.contactLinks
            }`}
          >
            <h3 className="sr-text">Contact Info</h3>
            <ul className={`N2 ${styles.linkList}`}>
              <li>
                <a
                  href={`mailto:${siteData.companyInfo.email}`}
                  itemProp="email"
                >
                  {siteData.companyInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${phoneNumberUnformat(
                    siteData.companyInfo.phone
                  )}`}
                  itemProp="telephone"
                >
                  {siteData.companyInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`container ${styles.footerRow}`}>
          <div className={`col-xs-12 col-md-9 ${styles.infoContainer}`}>
            <p className="N2">
              © {new Date().getFullYear()} Auxano Advisors LLC
            </p>
          </div>
          <div
            className={`col-xs-12 col-md-3 ${styles.infoContainer} ${
              styles.backToTopContainer
            }`}
          >
            <span className="N2">
              <Link to="#" activeClassName={styles.activeLink}>
                Back to Top <BackToTopIcon className={styles.backToTopIcon} />
              </Link>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default withSiteData(Footer);
