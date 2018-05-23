import React from "react";
import { withRouteData } from "react-static";
import Markdown from "react-markdown";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    const {
      home,
      userRoot: { user }
    } = this.props;
    return (
      <div>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <h1>Welcome.</h1>
              </div>
              <div className="col-xs-12 col-md-6">
                <p>
                  a small studio is a collection of creatives based in Seattle.
                  We collaborate with community leaders to create thoughtful
                  solutions that impact lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  userRoot: state.userRoot,
  ...ownProps
});

export default withRouteData(connect(mapStateToProps, null)(Home));
