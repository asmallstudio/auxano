import React from "react";

import styles from "./thirdColumn.scss";

class ThirdColumn extends React.Component {
  render() {
    const { title, children, className = "" } = this.props;
    return (
      <div className={`col-xs-12 col-lg-4 ${styles.container} ${className}`}>
        <h4>{title}</h4>
        {children}
      </div>
    );
  }
}

export default ThirdColumn;
