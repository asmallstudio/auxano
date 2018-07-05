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
            <Link to="/#">
              <h2>The Next Thing</h2>
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
                    to="/#"
                    activeClassName={styles.activeLink}
                    isActive={this._determineHomeHashActive(
                      "/",
                      "#our-mission"
                    )}
                    onClick={this._handleMenuClose}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/other"
                    activeClassName={styles.activeLink}
                    onClick={this._handleMenuClose}
                  >
                    Other Page
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
