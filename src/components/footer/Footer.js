import React from "react";
import { withSiteData } from "react-static";
import Markdown from "react-markdown";
import BackToTopIcon from "./BackToTopIcon";
import constants from "../../lib/constants.json";

import { phoneNumberUnformat } from "../../lib/utils/copy";
import AmbiLink from "../ui/ambiLink/AmbiLink";

import styles from "./footer.scss";

const Footer = props => {
  const { siteData } = props;
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
                <AmbiLink to="/team" activeClassName={styles.activeLink}>
                  Our Team
                </AmbiLink>
              </li>
              <li>
                <AmbiLink to="/news" activeClassName={styles.activeLink} exact>
                  News & Resources
                </AmbiLink>
              </li>
              <li>
                <AmbiLink to="/careers" activeClassName={styles.activeLink}>
                  Careers
                </AmbiLink>
              </li>
              <li>
                <AmbiLink to="/contact" activeClassName={styles.activeLink}>
                  Contact
                </AmbiLink>
              </li>
              <li>
                <AmbiLink
                  to="/privacy-terms"
                  activeClassName={styles.activeLink}
                >
                  Privacy & Terms
                </AmbiLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={`col-xs-12 col-md-3 ${styles.infoContainer}`}>
          <h3 className="sr-text">Social Links</h3>
          <ul className={`N2 ${styles.linkList}`}>
            <li>
              <AmbiLink
                to="https://www.linkedin.com/company/auxano-advisors-llc/"
                rel="me"
              >
                LinkedIn
              </AmbiLink>
            </li>
            <li>
              <AmbiLink to="https://facebook.com/auxanoadvisors/" rel="me">
                Facebook
              </AmbiLink>
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
              <a href={`mailto:${siteData.companyInfo.email}`} itemProp="email">
                {siteData.companyInfo.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${phoneNumberUnformat(siteData.companyInfo.phone1)}`}
                itemProp="telephone"
              >
                {siteData.companyInfo.phone1}
              </a>
            </li>
            <li>
              <a
                href={`tel:${phoneNumberUnformat(siteData.companyInfo.phone2)}`}
                itemProp="telephone"
              >
                {siteData.companyInfo.phone2}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.footerRow}`}>
        <div className={`col-xs-12 col-md-9 ${styles.infoContainer}`}>
          <p className="N2">© {new Date().getFullYear()} Auxano Advisors LLC</p>
        </div>
        <div
          className={`col-xs-12 col-md-3 ${styles.infoContainer} ${
            styles.backToTopContainer
          }`}
        >
          <span className="N2">
            <AmbiLink to="#" activeClassName={styles.activeLink}>
              Back to Top <BackToTopIcon className={styles.backToTopIcon} />
            </AmbiLink>
          </span>
        </div>
      </div>

      <div className={`container ${styles.footerRow}`}>
        <div
          className={`col-xs-12 ${styles.infoContainer} ${
            styles.complianceInfo
          }`}
        >
          <div className={`N2 ${styles.complianceInfo}`}>
            <Markdown source={siteData.complianceInfo} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default withSiteData(Footer);
