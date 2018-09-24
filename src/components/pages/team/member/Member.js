import React from "react";
import Markdown from "react-markdown";

import { RouteData, Link, Head } from "react-static";
import { pageChange } from "../../../../lib/utils/pageChange";
import { getFullPageTitle } from "../../../../lib/utils/copy";

import styles from "./member.scss";

class Post extends React.Component {
  componentDidMount() {
    pageChange();
  }

  _createHonorificName(name, qualifications) {
    if (qualifications.length) {
      const qualificationsString = qualifications.join(", ");
      return `${name}, ${qualificationsString}`;
    }
    return name;
  }

  _formatPositions(positions) {
    return positions.join(" | ");
  }

  render() {
    return (
      <RouteData
        render={({ member }) => (
          <React.Fragment>
            <Head>
              <title>{getFullPageTitle(member.title)}</title>
            </Head>
            <div className={`container ${styles.memberContainer}`}>
              <div className="row">
                <div className="col-xs-12">
                  <Link
                    to="/team"
                    className={`style-as-h3 ${styles.teamIndexLink}`}
                  >
                    Back to Team
                  </Link>
                </div>
                <aside className={`col-xs-12 col-md-3 ${styles.memberInfo}`}>
                  <img src={member.image} alt="" />
                  <h1 className="style-as-h3">
                    {this._createHonorificName(
                      member.title,
                      member.qualifications
                    )}
                  </h1>
                  <div className="style-as-p">
                    {this._formatPositions(member.positions)}
                  </div>
                  <a href={`mailto:${member.email}`}>{member.email}</a>
                </aside>
                <article
                  className={`col-xs-12 col-md-9 col-lg-8 col-lg-offset-1 ${
                    styles.memberBio
                  }`}
                >
                  <Markdown>{member.bio}</Markdown>
                </article>
              </div>
            </div>
          </React.Fragment>
        )}
      />
    );
  }
}

export default Post;
