import React from "react";

import styles from "./sectionWhoWeAre.scss";

class SectionWhoWeAre extends React.Component {
  render() {
    const {
      data: { title, text }
    } = this.props;
    return (
      <div>
        <div className={styles.container}>
          <a className="anchor" id="who-we-are" />
          <div className={styles.row}>
            <div className="col-xs-12">
              <h4>{title}</h4>
              <h3>{text}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionWhoWeAre;
