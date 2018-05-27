import React from "react";
import { withRouteData } from "react-static";
import Markdown from "react-markdown";

import SectionHero from "./SectionHero";
import SectionWhoWeAre from "./SectionWhoWeAre";
import SectionTheProblem from "./SectionTheProblem";
import SectionTheSolution from "./SectionTheSolution";
import SectionOurMission from "./SectionOurMission";
import SectionFocusAreas from "./SectionFocusAreas";
import SectionLongForm from "./SectionLongForm";
import SectionWhatWeDo from "./SectionWhatWeDo";
import SectionDiagramSolution from "./SectionDiagramSolution";
import SectionOurPartners from "./SectionOurPartners";
import SectionCloseTheGap from "./SectionCloseTheGap";
import SectionGetInvolved from "./SectionGetInvolved";
import SectionFooter from "./SectionFooter";

class Home extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <div>
        <SectionHero />
        <SectionWhoWeAre />
        <SectionTheProblem />
        <SectionTheSolution />
        <SectionOurMission />
        <SectionFocusAreas />
        <SectionLongForm />
        <SectionWhatWeDo />
        <SectionDiagramSolution />
        <SectionOurPartners />
        <SectionCloseTheGap />
        <SectionGetInvolved />
        <SectionFooter />
      </div>
    );
  }
}

export default withRouteData(Home);
