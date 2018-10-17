import React from "react";
import { Link, Head } from "react-static";
import { withSiteAndRouteData } from "../../../../lib/utils/hoc";
import { pageChange } from "../../../../lib/utils/pageChange";
import {
  getFullPageTitle,
  pickFirstAvailableString
} from "../../../../lib/utils/copy";

import LinkWithArrow from "../../../ui/linkWithArrow/LinkWithArrow";
import FullWidthSectionActionLink from "../../../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";
import SubscribeSection from "../../../ui/subscribeSection/SubscribeSection";

import styles from "./index.scss";

class Index extends React.Component {
  componentDidMount() {
    pageChange();
  }

  _formatPositions(positions) {
    return positions.join(" | ");
  }

  render() {
    const { members, siteData } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle("Team")}</title>
          <meta name="description" content={siteData.siteDescription} />
        </Head>
        <section className="container">
          <div className="row">
            <div className={`col-xs-12 ${styles.teamList}`}>
              <h1>Meet the Team</h1>
              <ul>
                {members.map((member, i) => (
                  <li key={i} className={styles.teamMember}>
                    <Link to={`/team/${member.slug}/`}>
                      <img src={member.image} alt="" />
                    </Link>
                    <Link to={`/team/${member.slug}/`} className="style-as-h3">
                      {member.title}
                    </Link>
                    <div className="style-as-p">
                      {this._formatPositions(member.positions)}
                    </div>
                    <LinkWithArrow
                      to={`/team/${member.slug}/`}
                      className={styles.arrowLink}
                    >
                      Read Bio
                    </LinkWithArrow>
                  </li>
                ))}
              </ul>
            </div>
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

export default withSiteAndRouteData(Index);
