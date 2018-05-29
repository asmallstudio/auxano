import React from "react";
import { Router, Link } from "react-static";
import { hot } from "react-hot-loader";

//
import Routes from "react-static-routes";
import Header from "./header/Header";

import "./globalStyles.scss";
import appStyles from "./app.scss";

const App = () => (
  <Router>
    <div>
      <Header />
      <div className={appStyles.routesContainer}>
        <Routes />
      </div>
    </div>
  </Router>
);

export default hot(module)(App);
