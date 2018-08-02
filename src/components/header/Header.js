import React from "react";
import { Link } from "react-static";
import FullWidthSectionActionLink from "../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";

import styles from "./header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuHidden: true,
      menuPersistent: false
    };
  }

  // Used to determine active anchor links on the specified path
  _determineHomeHashActive(path, hashLocation) {
    return (match, location) => {
      if (location.pathname !== "/") return false;
      return location.hash === hashLocation;
    };
  }

  _menuToggle = () => {
    this.setState(prevState => ({
      menuHidden: !prevState.menuHidden
    }));
  };

  // Close menu, unless menu ought to be persistent (as on large viewports).
  _menuClose = () => {
    if (this.state.menuPersistent != true) {
      // Ensure menu may be closed.
      this.setState({
        menuHidden: true
      });
    }
  };

  _menuOpen = () => {
    this.setState({
      menuHidden: false
    });
  };

  _checkMenuPersistence = () => {
    if (window.matchMedia("(min-width: 64em)").matches) {
      this.setState({
        menuPersistent: true
      });
      // Open menu if viewport size is large.
      this._menuOpen();
    } else {
      this.setState({
        menuPersistent: false
      });
      // Close menu if viewport size is less than large.
      this._menuClose();
    }
  };

  componentDidMount() {
    // On mounting of component, make sure Menu Persistence is set appropriately.
    this._checkMenuPersistence();
    // Watch for resize events in order to close menu when appropriate.
    window.addEventListener("resize", this._checkMenuPersistence, false);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._checkMenuPersistence, false);
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Link to="/">
              <img
                alt="Auxano Advisors"
                src="/assets/auxano-logo.svg"
                height="48"
                width="125"
              />
            </Link>
          </div>
          <nav id="navigation" className={styles.nav}>
            <MenuIcon
              menuHidden={this.state.menuHidden}
              menuAction={this._menuToggle}
            />
            <ul
              id="header-nav"
              className={styles.list}
              aria-expanded={this.state.menuHidden ? "false" : "true"}
              {...this.state.menuHidden && { hidden: true }}
            >
              <li className="style-as-h3">
                <Link
                  to="/"
                  activeClassName={styles.activeLink}
                  onClick={this._menuClose}
                >
                  Home
                </Link>
              </li>
              <li className="style-as-h3">
                <Link
                  to="/about-us"
                  activeClassName={styles.activeLink}
                  onClick={this._menuClose}
                >
                  About Us
                </Link>
              </li>
              <li className="style-as-h3">
                <Link
                  to="/other"
                  activeClassName={styles.activeLink}
                  onClick={this._menuClose}
                >
                  Other Page
                </Link>
              </li>
              <FullWidthSectionActionLink
                className={styles.bottomMenuLink}
                linkText="Schedule a meeting"
                to="#"
              />
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

class MenuIcon extends React.Component {
  render() {
    let menuIcon;
    // Show navicon if hidden, show x if not.
    if (this.props.menuHidden) {
      menuIcon = (
        <svg
          height="23"
          viewBox="0 0 26 23"
          width="26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m1.34.014h22.667c.4764137-.00000001.9166381.25416366 1.1548449.66674999.2382068.41258634.2382068.92091368 0 1.33350002-.2382068.41258633-.6784312.66675-1.1548449.66674999h-22.667c-.73647171 0-1.3335-.59702829-1.3335-1.3335s.59702829-1.3335 1.3335-1.3335zm0 9.333h22.667c.7364717 0 1.3335.59702829 1.3335 1.3335 0 .7364717-.5970283 1.3335-1.3335 1.3335h-22.667c-.73647171 0-1.3335-.5970283-1.3335-1.3335 0-.73647171.59702829-1.3335 1.3335-1.3335zm0 9.334h22.667c.7361956 0 1.333.5968044 1.333 1.333s-.5968044 1.333-1.333 1.333h-22.667c-.73619557 0-1.333-.5968044-1.333-1.333s.59680443-1.333 1.333-1.333z"
            fill="#483898"
            fillRule="evenodd"
            transform="translate(0 .5)"
          />
        </svg>
      );
    } else {
      menuIcon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="23"
          viewBox="0 0 26 23"
        >
          <g fill="none">
            <g transform="translate(3 1) rotate(45 .74 3.336)">
              <rect width="24" height="3" fill="#000" rx="1.5" />
              <rect width="24" height="3" fill="#483898" rx="1.5" />
            </g>
            <g transform="translate(3 1) scale(-1 1) rotate(45 -9.26 -20.806)">
              <rect width="24" height="3" fill="#000" rx="1.5" />
              <rect width="24" height="3" fill="#483898" rx="1.5" />
            </g>
          </g>
        </svg>
      );
    }
    return (
      <button
        aria-expanded={this.props.menuHidden ? "false" : "true"}
        aria-controls="header-nav"
        className={styles.menuIcon}
        onClick={this.props.menuAction}
      >
        <span className={styles.srText}>Menu</span>
        {menuIcon}
      </button>
    );
  }
}

export default Header;
