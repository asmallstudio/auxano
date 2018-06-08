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
          <hr />
          <h2>Style Guide</h2>
          <h1>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
          <h4>h4</h4>
          <h5>h5</h5>
          <h6>h6</h6>
          <p>p</p>
        </div>
      </div>
    );
  }
}

export default withRouteData(Home);
