import React from "react";
import { Router, Head, withSiteData } from "react-static";
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

  updateDoNotShowCoverState = state => {
    return new Promise((resolve, reject) => {
      this.setState(
        {
          doNotShowCover: state
        },
        err => {
          if (err) reject(err);
          resolve(state);
        }
      );
    });
  };

  _checkCoverStateOnScroll = () => {
    if (window.scrollY > window.innerHeight) {
      this.updateDoNotShowCoverState(true);
      window.scrollTo(0, 0);
      window.removeEventListener(
        "scroll",
        this._checkCoverStateOnScroll,
        false
      );
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this._checkCoverStateOnScroll, false);
  }

  render() {
    const { doNotShowCover } = this.state;
    const { siteData } = this.props;

    return (
      <Router>
        <React.Fragment>
          <Head>
            <title>{constants.siteMeta.title}</title>
          </Head>
          {doNotShowCover ? null : (
            <CoverSheet
              hero={siteData.coverSheet.hero}
              tagline={siteData.coverSheet.tagline}
              updateDoNotShowCoverState={this.updateDoNotShowCoverState}
            />
          )}
          <Header />
          <main
            className={`${
              appStyles.routesContainer
            } doNotShowCoverSheet--${doNotShowCover}`}
          >
            <Routes />
          </main>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default hot(module)(withSiteData(App));
