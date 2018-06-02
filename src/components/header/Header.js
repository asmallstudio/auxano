import React from "react";
import { Router, Link } from "react-static";

import styles from "./header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  // Used to determine active anchor links on the specified path
  _determineHomeHashActive(path, hashLocation) {
    return (match, location) => {
      if (location.pathname !== "/") return false;
      return location.hash === hashLocation;
    };
  }

  _handleToggleMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  };

  _handleMenuClose = () => {
    console.log("handle close clicked");
    this.setState({
      showMenu: false
    });
  };

  render() {
    return (
      <div
        className={`${styles.container} ${this.state.showMenu &&
          styles.showContainer}`}
      >
        <div className={styles.row}>
          <div
            className={styles.menuToggleContainer}
            onClick={this._handleToggleMenu}
          >
            <MenuIcon showMenu={this.state.showMenu} />
          </div>
          <div className={styles.logoContainer}>
            <Link to="#">
              <img
                src="/uploads/logo.png"
                alt="a small studio logo"
                className={styles["logo-image"]}
              />
            </Link>
          </div>

          <div
            className={`${this.state.showMenu ? styles.show : styles.hide} ${
              styles.navContainer
            }`}
          >
            <nav className={""}>
              <ul className={styles.list}>
                <li>
                  <Link
                    to="/#our-mission"
                    activeClassName={styles.activeLink}
                    isActive={this._determineHomeHashActive(
                      "/",
                      "#our-mission"
                    )}
                    onClick={this._handleMenuClose}
                  >
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#what-we-do"
                    activeClassName={styles.activeLink}
                    isActive={this._determineHomeHashActive("/", "#what-we-do")}
                    onClick={this._handleMenuClose}
                  >
                    What We Do
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#our-partners"
                    activeClassName={styles.activeLink}
                    isActive={this._determineHomeHashActive(
                      "/",
                      "#our-partners"
                    )}
                    onClick={this._handleMenuClose}
                  >
                    Our Partners
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#get-involved"
                    activeClassName={styles.activeLink}
                    isActive={this._determineHomeHashActive(
                      "/",
                      "#get-involved"
                    )}
                    onClick={this._handleMenuClose}
                  >
                    Get Involved
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

const MenuIcon = ({ showMenu }) => (
  <img
    src={showMenu ? "round-close.svg" : "rounded.svg"}
    width={showMenu ? 28 : 36}
    height={showMenu ? 28 : 24}
    alt="close-toggle-icon"
  />
);

export default Header;
