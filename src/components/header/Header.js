import React from "react";
import { Link } from "react-static";

import styles from "./header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuHidden: true
    };
  }

  // Used to determine active anchor links on the specified path
  _determineHomeHashActive(path, hashLocation) {
    return (match, location) => {
      if (location.pathname !== "/") return false;
      return location.hash === hashLocation;
    };
  }

  menuToggle() {
    this.setState(prevState => ({
      menuHidden: !prevState.menuHidden
    }));
  }

  // _handleToggleMenu = () => {
  //   this.setState(prevState => ({
  //     menuHidden: !prevState.menuHidden
  //   }));
  // };

  // _handleMenuClose = () => {
  //   this.setState({
  //     menuHidden: true
  //   });
  // };

  render() {
    return (
      <header className={styles.header}>
        <div
          className={`${styles.container} ${this.state.showMenu &&
            styles.showContainer}`}
        >
          <div className={styles.logoContainer}>
            <Link to="/">
              <img alt="Auxano Advisors" src="/assets/auxano-logo.svg" />
            </Link>
          </div>
          <nav id="navigation" className="{styles.nav}">
            <MenuIcon
              menuHidden={this.state.menuHidden}
              menuHiddenToggle={this.menuToggle.bind(this)}
            />
            <ul
              id="header-nav"
              className={styles.list}
              aria-expanded={this.menuHidden ? "false" : "true"}
              hidden
            >
              <li className={`${styles.listItem} style-as-h3`}>
                <Link
                  to="/#"
                  activeClassName={styles.activeLink}
                  isActive={this._determineHomeHashActive("/", "#our-mission")}
                  onClick={this._handleMenuClose}
                >
                  Home
                </Link>
              </li>
              <li className={`${styles.listItem} style-as-h3`}>
                <Link
                  to="/about-us"
                  activeClassName={styles.activeLink}
                  onClick={this._handleMenuClose}
                >
                  About Us
                </Link>
              </li>
              <li className={`${styles.listItem} style-as-h3`}>
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
      </header>
    );
  }
}

class MenuIcon extends React.Component {
  render() {
    let menuIcon;
    // Show menu if hidden, show x if not.
    if (this.menuHidden) {
      menuIcon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="22"
          viewBox="0 0 26 22"
        >
          <path
            fill="#483898"
            fill-rule="evenodd"
            d="M1.34.014h22.667a1.333 1.333 0 1 1 0 2.667H1.34a1.333 1.333 0 0 1 0-2.667zm0 9.333h22.667a1.333 1.333 0 0 1 0 2.667H1.34a1.333 1.333 0 1 1 0-2.667zm0 9.334h22.667a1.333 1.333 0 1 1 0 2.666H1.34a1.333 1.333 0 0 1 0-2.666z"
          />
        </svg>
      );
    } else {
      menuIcon = (
        <svg
          height="33"
          viewBox="0 0 38 33"
          width="38"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <rect id="a" height="3" rx="1.5" width="24" x="-2" y="9" />
            <filter
              id="b"
              height="1033.3%"
              width="216.7%"
              x="-58.3%"
              y="-333.3%"
            >
              <feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
                stdDeviation="4"
              />
              <feColorMatrix
                in="shadowBlurOuter1"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
              />
            </filter>
            <rect id="c" height="3" rx="1.5" width="24" x="-2" y="9" />
            <filter
              id="d"
              height="1033.3%"
              width="216.7%"
              x="-58.3%"
              y="-333.3%"
            >
              <feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
                stdDeviation="4"
              />
              <feColorMatrix
                in="shadowBlurOuter1"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
              />
            </filter>
          </defs>
          <g fill="none">
            <g transform="matrix(.70710678 .70710678 -.70710678 .70710678 19.353544 -.495588)">
              <use fill="#000" filter="url(#b)" xlinkHref="#a" />
              <use fill="#483898" xlinkHref="#a" />
            </g>
            <g transform="matrix(-.70710678 .70710678 .70710678 .70710678 18.646415 -.495571)">
              <use fill="#000" filter="url(#d)" xlinkHref="#c" />
              <use fill="#483898" xlinkHref="#c" />
            </g>
          </g>
        </svg>
      );
    }
    return (
      <button
        aria-expanded={this.menuHidden ? "false" : "true"}
        aria-controls="header-nav"
        className={styles.menuIcon}
        onClick={this.props.menuToggle}
      >
        <span className={styles.srText}>Menu</span>
        {menuIcon}
      </button>
    );
  }
}

export default Header;
