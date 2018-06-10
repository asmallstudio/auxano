import React from "react";
import { withRouteData } from "react-static";

import DesignGuide from "../../ui/DesignGuide";
import LayoutGuide from "../../ui/LayoutGuide";

class Home extends React.Component {
  render() {
    const {
      home: { data }
    } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <h1>Welcome to your Boilerplate</h1>
            <hr />
          </div>
        </div>
        <DesignGuide />
        <LayoutGuide />
      </div>
    );
  }
}

export default withRouteData(Home);
