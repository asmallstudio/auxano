import React from "react";
import { withRouteData } from "react-static";
import Markdown from "react-markdown";
import { connect } from "react-redux";

import SectionHero from "./SectionHero";

class Home extends React.Component {
  render() {
    const {
      home,
      userRoot: { user }
    } = this.props;
    return (
      <div>
        <SectionHero />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  userRoot: state.userRoot,
  ...ownProps
});

export default withRouteData(connect(mapStateToProps, null)(Home));
