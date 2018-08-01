import React from "react";
import { withRouteData, Head } from "react-static";
import { getFullPageTitle } from "../../../lib/utils/utils";

class Other extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { other } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{getFullPageTitle(other.other.title)}</title>
        </Head>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>{other.other.title}</h1>
              <h3>{other.other.exampleText}</h3>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouteData(Other);
