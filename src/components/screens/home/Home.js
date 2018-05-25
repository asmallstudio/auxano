import React from "react";
import { withRouteData } from "react-static";
import Markdown from "react-markdown";

import SectionHero from "./SectionHero";
import SectionWhoWeAre from "./SectionWhoWeAre";
import SectionTheProblem from "./SectionTheProblem";

class Home extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <div>
        <SectionHero />
        <SectionWhoWeAre />
        <SectionTheProblem />
      </div>
    );
  }
}

export default withRouteData(Home);
