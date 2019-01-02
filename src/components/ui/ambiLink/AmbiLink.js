import React from "react";
import { Link } from "@reach/router";

class AmbiLink extends React.Component {
  parseTo(to) {
    const parser = document.createElement("a");
    parser.href = to;
    return parser;
  }

  isInternal(toLocation) {
    return window.location.host === toLocation.host;
  }

  render() {
    const { to, children, ...rest } = this.props;
    const toLocation = this.parseTo(to);
    const isInternal = this.isInternal(toLocation);
    if (isInternal) {
      return (
        <Link to={toLocation.pathname} {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={to} {...rest}>
        {children}
      </a>
    );
  }
}

export default AmbiLink;
