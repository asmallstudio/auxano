import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Markdown from "react-markdown";
import BackToTopIcon from "./BackToTopIcon";
import constants from "../../lib/constants.json";

import { NextAmbiLink } from "@asmallstudio/components";
import { phoneNumberUnformat } from "@asmallstudio/utilities";

import styles from "./footer.module.scss";

function NavLink({ children, ...props }) {
  const router = useRouter();

  const child = React.Children.only(children);

  const isCurrent = props.href === router.pathname;
  function isInternal(link) {
    if (typeof link !== "string") return true;
    return (
      !link.match(/^#/) &&
      !link.match(/^[a-z]{1,10}:\/\//) &&
      !link.match(/^mailto:|^tel:/)
    );
  }
  let childProps = {};

  if (typeof child.props.className !== "undefined") {
    childProps.className = child.props.className || "";
  }

  if (isCurrent) {
    if (props.activeClassName) {
      childProps.className = `${childProps.className || ""} ${
        props.activeClassName
      }`.trim();
    }
    childProps["aria-current"] = "page";
  }

  delete props.activeClassName;

  if (isInternal(props.href)) {
    return <Link {...props}>{React.cloneElement(child, childProps)}</Link>;
  }

  childProps = { ...props };

  return <>{React.cloneElement(child, childProps)}</>;
}

function NextMarkdownLink(props) {
  return <NextAmbiLink href={props.href}>{props.children}</NextAmbiLink>;
}

export default function Footer({ siteData }) {
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
            <h3 className="sr-only">Site Navigation</h3>
            <ul className={`N2 ${styles.linkList}`}>
              {siteData.footerNav.map((navItem, i) => (
                <li key={i}>
                  <NavLink
                    href={navItem.link}
                    activeClassName={styles.activeLink}
                  >
                    <a>{navItem.title}</a>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={`col-xs-12 col-md-3 ${styles.infoContainer}`}>
          <h3 className="sr-only">Social Links</h3>
          <ul className={`N2 ${styles.linkList}`}>
            <li>
              <NextAmbiLink
                href="https://www.linkedin.com/company/auxano-advisors-llc/"
                rel="me"
                target="_blank"
              >
                LinkedIn
              </NextAmbiLink>
            </li>
            <li>
              <NextAmbiLink
                href="https://facebook.com/auxanoadvisors/"
                rel="me"
                target="_blank"
              >
                Facebook
              </NextAmbiLink>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.footerRow}`}>
        <div
          className={`col-xs-12 col-md-9 ${styles.infoContainer} ${styles.contactLinks}`}
        >
          <h3 className="sr-only">Contact Info</h3>
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
          <h3 className="sr-only">Address</h3>
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
          className={`col-xs-12 col-md-3 ${styles.infoContainer} ${styles.backToTopContainer}`}
        >
          <span className="N2">
            <NextAmbiLink href="#">
              Back to Top <BackToTopIcon className={styles.backToTopIcon} />
            </NextAmbiLink>
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
              renderers={{ link: NextMarkdownLink }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
