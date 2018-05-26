import React from "react";
import { withRouteData } from "react-static";
import Markdown from "react-markdown";

import SectionHero from "./SectionHero";
import SectionWhoWeAre from "./SectionWhoWeAre";
import SectionTheProblem from "./SectionTheProblem";
import SectionTheSolution from "./SectionTheSolution";

class Home extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <div>
        <SectionHero />
        <SectionWhoWeAre />
        <SectionTheProblem />
        <SectionTheSolution />
      </div>
    );
  }
}

export default withRouteData(Home);
