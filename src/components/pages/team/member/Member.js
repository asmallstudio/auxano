import React from "react";
import { Link, Head } from "react-static";
import { withSiteAndRouteData } from "../../../../lib/utils/hoc";
import { pageChange } from "../../../../lib/utils/pageChange";
import { getFullPageTitle } from "../../../../lib/utils/copy";

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
          <title>{getFullPageTitle(member.title)}</title>
          <meta name="description" content={siteData.siteDescription} />
        </Head>
        <section className={`container ${styles.memberContainer}`}>
          <div className="row">
            <div className={`col-xs-12 ${styles.indexLinkContainer}`}>
              <Link to="/team" className={`style-as-h3 ${styles.indexLink}`}>
                Back to Team
              </Link>
            </div>
            <aside className={`col-xs-12 col-md-3 ${styles.memberInfo}`}>
              <img src={member.image} alt="" />
              <h1 className="style-as-h3">
                {this._createHonorificName(member.title, member.qualifications)}
              </h1>
              <div className="style-as-p">
                {this._formatPositions(member.positions)}
              </div>
              {member.extension !== "" && (
                <div className={styles.contactInfoItem}>
                  <a href={`tel:+14258891261;ext=${member.extension}`}>
                    {`+1 (425) 889-1261; ext: ${member.extension}`}
                  </a>
                </div>
              )}
              <div className={styles.contactInfoItem}>
                <a href={`mailto:${member.email}`}>{member.email}</a>
              </div>
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
