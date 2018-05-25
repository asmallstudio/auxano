import React from "react";
import { Router, Link } from "react-static";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import store from "../lib/redux/store";

//
import Routes from "react-static-routes";
import Header from "./header/Header";

import "./globalStyles.scss";
import appStyles from "./app.scss";

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <div className={appStyles.routesContainer}>
          <Routes />
        </div>
      </div>
    </Router>
  </Provider>
);

export default hot(module)(App);
