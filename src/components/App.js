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

    this.state = {};
  }

  _checkShowCover = () => {
    const localCoverState = window.localStorage.getItem("showCover");
    let coverState;
    if (localCoverState === undefined) {
      coverState = true;
    } else if (localCoverState === "false") {
      coverState = false;
    } else if (localCoverState === "true") {
      coverState = true;
    }

    this.setState({
      showCover: coverState
    });
  };

  componentDidMount() {
    console.log("mount", window.localStorage.getItem("showCover"));
    this._checkShowCover();
    window.localStorage.setItem("showCover", false);
    // window.addEventListener("click", this._checkCoverHidden, false);
  }

  render() {
    const { showCover } = this.state;
    console.log(showCover);
    return (
      <Router>
        <React.Fragment>
          <Head>
            <title>{constants.siteMeta.title}</title>
          </Head>
          {showCover ? <CoverSheet /> : null}
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
