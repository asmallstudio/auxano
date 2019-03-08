import React from "react";
import { Head } from "react-static";
import { getFullPageTitle } from "@asmallstudio/utilities";
import { AmbiLink } from "@asmallstudio/components";
import { withSiteAndRouteData } from "../../../../lib/utils/hoc";
import { pageChange } from "../../../../lib/utils/pageChange";
import constants from "../../../../lib/constants.json";

import Markdown from "react-markdown";
import FullWidthSectionActionLink from "../../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "../../../ui/subscribeSection/SubscribeSection";

import styles from "./member.scss";

class Post extends React.Component {
  componentDidMount() {
    pageChange();
  }

  _createHonorificName(name, qualifications) {
    if (qualifications && qualifications.length) {
      const qualificationsString = qualifications.join(", ");
      return qualificationsString.length
        ? `${name}, ${qualificationsString}`
        : name;
    }
    return name;
  }

  _formatPositions(positions) {
    return positions.join(" | ");
  }

  render() {
    const { member, siteData } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>
            {getFullPageTitle(member.title, constants.siteMeta.title)}
          </title>
          <meta name="description" content={siteData.siteDescription} />
        </Head>
        <section className={`container ${styles.memberContainer}`}>
          <div className="row">
            <div className={`col-xs-12 ${styles.indexLinkContainer}`}>
              <AmbiLink
                to="/team"
                className={`style-as-h3 ${styles.indexLink}`}
              >
                Back to Team
              </AmbiLink>
            </div>
            <aside className={`col-xs-12 col-md-3 ${styles.memberInfo}`}>
              <img src={member.image} alt="" />
              <h1 className="style-as-h3">
                {this._createHonorificName(member.title, member.qualifications)}
              </h1>
              <div className="style-as-p">
                {this._formatPositions(member.positions)}
              </div>
              {typeof member.partnerCompany !== "undefined" &&
                member.partnerCompany !== "" && (
                  <div className="style-as-p">{member.partnerCompany}</div>
                )}
              {typeof member.extension !== "undefined" &&
                member.extension !== "" && (
                  <div className={styles.contactInfoItem}>
                    <a href={`tel:+14258891261;ext=${member.extension}`}>
                      {`+1 (425) 889-1261; ext: ${member.extension}`}
                    </a>
                  </div>
                )}
              {typeof member.email !== "undefined" && member.email !== "" && (
                <div className={styles.contactInfoItem}>
                  <a href={`mailto:${member.email}`}>{member.email}</a>
                </div>
              )}
            </aside>
            <article
              className={`col-xs-12 col-md-9 col-lg-8 col-lg-offset-1 ${
                styles.memberBio
              }`}
            >
              <Markdown>{member.bio}</Markdown>
            </article>
          </div>
        </section>
        <FullWidthSectionActionLink
          linkText={siteData.actionBanner.text}
          to={siteData.actionBanner.link}
          className="dg-actionBanner"
        />
        <SubscribeSection
          heading={siteData.subscribe.heading}
          text={siteData.subscribe.text}
          className="dg-subscribe"
        />
      </React.Fragment>
    );
  }
}

export default withSiteAndRouteData(Post);
