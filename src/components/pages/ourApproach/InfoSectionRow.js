import React from "react";

import styles from "./infoSectionRow.scss";

const InfoSectionRow = ({
  imgSrc = "https://via.placeholder.com/300x180",
  imgAlt = "placeholder image",
  children,
  className = ""
}) => (
  <div className={`row ${styles.infoSectionRow} ${className}`}>
    <div className={`col-xs-12 col-md-6 ${styles.infoSectionColImage}`}>
      <div
        className={`${styles.imgContainer} ${styles.dingusDotRelative} ${styles.dingusDot}`}
      >
        <img className={styles.infoSectionImage} src={imgSrc} alt={imgAlt} />
      </div>
    </div>
    <div className={`col-xs-12 col-md-6 ${styles.infoSectionColText}`}>
      <div className="col-lg-1 hidden-lg-down" />
      <div className="col-lg-11">{children}</div>
    </div>
  </div>
);

export default InfoSectionRow;
