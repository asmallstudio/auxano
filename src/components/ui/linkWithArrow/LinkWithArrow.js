import React from "react";
import { Link } from "react-static";

import styles from "./linkWithArrow.scss";

class LinkWithArrow extends React.Component {
  render() {
    const { link, children, className = "" } = this.props;
    return (
      <Link to={link} className={`${styles.link} ${className}`}>
        {children}
      </Link>
    );
  }
}

export default LinkWithArrow;
