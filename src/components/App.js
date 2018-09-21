import React from "react";
import { Router, Head } from "react-static";
import { hot } from "react-hot-loader";

import Routes from "react-static-routes";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import constants from "../lib/constants.json";
import CoverSheet from "./ui/coverSheet/CoverSheet";

import "./styles/main.scss";
import appStyles from "./app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doNotShowCover: false
    };
  }

  _updateDoNotShowCoverState = state => {
    return this.setState({
      doNotShowCover: state
    });
  };

  render() {
    const { doNotShowCover } = this.state;
    return (
      <Router>
        <React.Fragment>
          <Head>
            <title>{constants.siteMeta.title}</title>
          </Head>
          {doNotShowCover ? null : <CoverSheet />}
          <button onClick={() => this._updateDoNotShowCoverState(true)}>
            {"Scrolled past header"}
          </button>
          <Header />
          <main className={appStyles.routesContainer}>
            <Routes />
          </main>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default hot(module)(App);
