import React from "react";
import { withRouteData } from "react-static";

import DesignGuide from "../../ui/guides/DesignGuide";
import styles from "./home.scss";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className={styles.testStyle}>Welcome to your Boilerplate!</h1>
              <h1>{this.props.home.hero.title}</h1>
              <h3>{this.props.home.hero.exampleText}</h3>
              <hr />
            </div>
          </div>
        </div>
        <DesignGuide />
      </div>
    );
  }
}

export default withRouteData(Home);
