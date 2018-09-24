import React from "react";
import { RouteData, Link, Head } from "react-static";
import { getFullPageTitle } from "../../../../lib/utils/copy";
import { pageChange } from "../../../../lib/utils/pageChange";

import LinkWithArrow from "../../../ui/linkWithArrow/LinkWithArrow";
import styles from "./index.scss";

const PaginationLink = ({ ...rest }) => <Link {...rest} />;

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
        render={({ members, currentPage, totalPages }) => (
          <React.Fragment>
            <Head>
              <title>{getFullPageTitle("Team")}</title>
            </Head>
            <div className="container">
              <div className="row">
                <div className={`col-xs-12 ${styles.teamList}`}>
                  <h1 className="style-as-h3">Meet the Team</h1>
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
                          Read bio
                        </LinkWithArrow>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      />
    );
  }
}

export default Index;
