import React from "react";
import { Router, Link } from "react-static";
import { hot } from "react-hot-loader";
import { ParallaxProvider } from "react-scroll-parallax";

//
import Routes from "react-static-routes";
import Header from "./header/Header";
import Footer from "./footer/Footer";

import "./styles/main.scss";
import appStyles from "./app.scss";

const App = () => (
  <ParallaxProvider>
    <Router>
      <div>
        <Header />
        <div className={appStyles.routesContainer}>
          <Routes />
        </div>
        <Footer />
      </div>
    </Router>
  </ParallaxProvider>
);

export default hot(module)(App);
