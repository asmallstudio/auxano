import React from "react";
import { RouteData, Link, Head } from "react-static";
import { getFullPageTitle } from "../../../../lib/utils/copy";
import { pageChange } from "../../../../lib/utils/pageChange";

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
    return (
      <RouteData
        render={({ globalData, members }) => (
          <React.Fragment>
            <Head>
              <title>{getFullPageTitle("Team")}</title>
            </Head>
            <section className="container">
              <div className="row">
                <div className={`col-xs-12 ${styles.teamList}`}>
                  <h1>Meet the Team</h1>
                  <ul>
                    {members.map(member => (
                      <li key={member.id} className={styles.teamMember}>
                        <Link to={`/team/${member.slug}/`}>
                          <img src={member.image} alt="" />
                        </Link>
                        <Link
                          to={`/team/${member.slug}/`}
                          className="style-as-h3"
                        >
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
              linkText={globalData.actionBanner.text}
              to={globalData.actionBanner.link}
              className="dg-actionBanner"
            />
            <SubscribeSection
              heading={globalData.subscribe.heading}
              text={globalData.subscribe.text}
              className="dg-subscribe"
            />
          </React.Fragment>
        )}
      />
    );
  }
}

export default Index;
