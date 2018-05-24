import React from "react";
import { Router, Link } from "react-static";

import "./header.scss";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="section">
          <div className="container" id="header-container">
            <div className="row">
              <div className="col-xs-8 col-md-6 col-lg-6">
                <img
                  src="/uploads/logo.png"
                  alt="a small studio logo"
                  id="logo-image"
                />
              </div>
              <div className="col-xs-4 col-md-6 col-lg-6">
                <nav className="right">
                  <ul className="list">
                    <li>Our Mission</li>
                    <li>What We Do</li>
                    <li>Out Partners</li>
                    <li>Get Involved</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
