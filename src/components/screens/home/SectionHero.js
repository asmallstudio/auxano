import React from "react";

import "./sectionHero.scss";

class SectionHero extends React.Component {
  render() {
    return (
      <div>
        <div className="container" id="section-hero-container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className="hero-header">
                Getting people to places when it matters most...
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionHero;
