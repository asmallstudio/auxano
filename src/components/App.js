import "babel-polyfill"; // Support older browsers
import React from "react";
import { Router } from "react-static";
import { hot } from "react-hot-loader";

import Routes from "react-static-routes";
import Header from "./header/Header";
import Footer from "./footer/Footer";

import "./styles/main.scss";
import appStyles from "./app.scss";

const App = () => (
  <Router>
    <React.Fragment>
      <Header />
      <main className={appStyles.routesContainer}>
        <Routes />
      </main>
      <Footer />
    </React.Fragment>
  </Router>
);

export default hot(module)(App);
