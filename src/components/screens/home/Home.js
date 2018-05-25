import React from "react";
import { withRouteData } from "react-static";
import Markdown from "react-markdown";

import SectionHero from "./SectionHero";
import SectionWhoWeAre from "./SectionWhoWeAre";

class Home extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <div>
        <SectionHero />
        <SectionWhoWeAre />
      </div>
    );
  }
}

export default withRouteData(Home);
