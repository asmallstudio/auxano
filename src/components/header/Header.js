import React from "react";
import { Router, Link } from "react-static";

import "./header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="container" id="header-container">
        <div className="row" id="header-row">
          <div className="col-xs-4">
            <img
              src="/uploads/logo.png"
              alt="a small studio logo"
              id="logo-image"
            />
          </div>
          <nav className="right col-xs-8">
            <ul className="list">
              <li>
                <a href="#">Our Mission</a>
              </li>
              <li>
                <a href="#">What We Do</a>
              </li>
              <li>
                <a href="#">Out Partners</a>
              </li>
              <li>
                <a href="#">Get Involved</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
