import React from "react";

import styles from "./infoSectionRow.scss";

class InfoSectionRow extends React.Component {
  render() {
    const {
      imgSrc = "https://via.placeholder.com/300x180",
      imgAlt = "placeholder image",
      children
    } = this.props;
    return (
      <div className={`row ${styles.infoSectionRow}`}>
        <div className={`col-xs-12 col-md-6 ${styles.infoSectionColImage}`}>
          <img className={styles.infoSectionImage} src={imgSrc} alt={imgAlt} />
          <div className={styles.dingusDot} />
        </div>
        <div className={`col-xs-12 col-md-6 ${styles.infoSectionColText}`}>
          {children}
        </div>
      </div>
    );
  }
}

export default InfoSectionRow;