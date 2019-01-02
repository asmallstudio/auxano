import React from "react";
import { Link } from "@reach/router";

import styles from "./linkWithArrow.scss";

class LinkWithArrow extends React.Component {
  render() {
    const { to, children, className = "" } = this.props;
    if (this.props.to) {
      return (
        <Link to={to} className={`${styles.link} ${className}`}>
          {children}
        </Link>
      );
    }
    return <span className={`${styles.link} ${className}`}>{children}</span>;
  }
}

export default LinkWithArrow;
