import React from "react";
//import { Link } from "react-static";

import styles from "./footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className={`container ${styles.footerContainer}`}>
          <div className="rowLinks">
            <div className="col-xs-12">
              <h4>[Footer]</h4>
            </div>
          </div>
          <div className="rowInfo">
            <div className="col-xs-12">
              <n2>Hello This is Info with stuff</n2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
