import React from "react";
import { withSiteData } from "react-static";
import Markdown from "react-markdown";
import BackToTopIcon from "./BackToTopIcon";
import constants from "../../lib/constants.json";

import { AmbiLink } from "@asmallstudio/components";
import { phoneNumberUnformat } from "@asmallstudio/utilities";

import styles from "./footer.scss";

const NavLink = ({ activeClassName, ...restProps }) => (
  <AmbiLink
    {...restProps}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? activeClassName : null
      };
    }}
  />
);

const ReactMarkdownLink = props => (
  <AmbiLink to={props.href}>{props.children}</AmbiLink>
);

const Footer = ({ siteData }) => (
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
            {siteData.footerNav.map((navItem, i) => (
              <li key={i}>
                <NavLink to={navItem.link} activeClassName={styles.activeLink}>
                  {navItem.title}
                </NavLink>
              </li>
            ))}
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
              target="_blank"
            >
              LinkedIn
            </AmbiLink>
          </li>
          <li>
            <AmbiLink
              to="https://facebook.com/auxanoadvisors/"
              rel="me"
              target="_blank"
            >
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
        <h3 className="sr-text">Address</h3>
        <div
          itemProp="address"
          itemScope
          itemType="http://schema.org/PostalAddress"
          className="N2"
        >
          <span itemProp="streetAddress">
            {siteData.companyInfo.address.line1}
            {", "}
            {siteData.companyInfo.address.line2}
          </span>
          <br />
          <span itemProp="addressLocality">
            {siteData.companyInfo.address.city}
          </span>
          ,{" "}
          <span itemProp="addressRegion">
            {siteData.companyInfo.address.state}
          </span>{" "}
          <span itemProp="postalCode">
            {siteData.companyInfo.address.zipcode}
          </span>
          <meta itemProp="addressCountry" content="US" />
        </div>
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
          <AmbiLink to="#">
            Back to Top <BackToTopIcon className={styles.backToTopIcon} />
          </AmbiLink>
        </span>
      </div>
    </div>

    <div className={`container ${styles.footerRow}`}>
      <div
        className={`col-xs-12 ${styles.infoContainer} ${styles.complianceInfo}`}
      >
        <div className={`N2 ${styles.complianceInfo}`}>
          <Markdown
            source={siteData.complianceInfo}
            renderers={{ link: ReactMarkdownLink }}
          />
        </div>
      </div>
    </div>
  </footer>
);

export default withSiteData(Footer);
