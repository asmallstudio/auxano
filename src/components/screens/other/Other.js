import React from "react";
import { withRouteData } from "react-static";

class Other extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>{this.props.other.other.title}</h1>
              <h3>{this.props.other.other.exampleText}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouteData(Other);
