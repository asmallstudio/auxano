import React from "react";
import { withRouteData } from "react-static";

class Home extends React.Component {
  render() {
    const {
      home: { data }
    } = this.props;
    return (
      <div className="container">
        <div className="row">
          <h1>Welcome to your Boilerplate</h1>
        </div>
      </div>
    );
  }
}

export default withRouteData(Home);
