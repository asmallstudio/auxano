import React from "react";
import { Head } from "react-static";
import { getFullPageTitle } from "@asmallstudio/utilities";
import { AmbiLink } from "@asmallstudio/components";
import { withSiteAndRouteData } from "../../../../lib/utils/hoc";
import { pageChange } from "../../../../lib/utils/pageChange";
import constants from "../../../../lib/constants.json";

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

    const fullMembers = members.filter(
      member => member.isStrategicPartner === false
    );
    const strategicPartners = members.filter(
      member => member.isStrategicPartner === true
    );

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle("Team", constants.siteMeta.title)}</title>
          <meta name="description" content={siteData.siteDescription} />
        </Head>
        <section className="container">
          <div className="row">
            <div className={`col-xs-12 ${styles.teamList}`}>
              <h1>Meet Our Team</h1>
              <ul>
                {fullMembers.map((member, i) => (
                  <li key={i} className={styles.teamMember}>
                    <AmbiLink to={`/team/${member.slug}/`}>
                      <img src={member.image} alt="" />
                    </AmbiLink>
                    <AmbiLink
                      to={`/team/${member.slug}/`}
                      className="style-as-h3"
                    >
                      {member.title}
                    </AmbiLink>
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
              <h2>Strategic Partners</h2>
              <ul>
                {strategicPartners.map((member, i) => (
                  <li key={i} className={styles.teamMember}>
                    <AmbiLink to={`/team/${member.slug}/`}>
                      <img src={member.image} alt="" />
                    </AmbiLink>
                    <AmbiLink
                      to={`/team/${member.slug}/`}
                      className="style-as-h3"
                    >
                      {member.title}
                    </AmbiLink>
                    <div className="style-as-p">
                      {this._formatPositions(member.positions)}
                    </div>
                    {typeof member.partnerCompany !== "undefined" &&
                      member.partnerCompany !== "" && (
                        <div className="style-as-p">
                          {member.partnerCompany}
                        </div>
                      )}
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
