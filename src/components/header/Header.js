import React from "react";
import { withSiteData } from "react-static";
import { AmbiLink } from "@asmallstudio/components";

import FullWidthSectionActionLink from "../ui/fullWidthSectionActionLink/FullWidthSectionActionLink";

import styles from "./header.scss";

const NavLink = ({ activeClassName, ...restProps }) => (
  <AmbiLink
    {...restProps}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? activeClassName : null
      };
    }}
  />
);

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
    if (this.state.menuPersistent !== true) {
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
      // Keep menu open on wider viewports.
      this.setState({
        menuPersistent: true,
        screenSize: "wide"
      });
      // Open menu if viewport size is large.
      this._menuOpen();
    } else {
      this.setState({
        menuPersistent: false
      });

      // Do not close menu if menu size is already less than large.
      if (this.state.screenSize === "wide") {
        this._menuClose();

        // Allow menu toggle on narrower viewports.
        this.setState({
          screenSize: "narrow"
        });
      }
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
    const { siteData } = this.props;
    const { menuHidden } = this.state;

    return (
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <NavLink to="/">
              <AuxanoLogo alt="Auxano Advisors" height="48" width="125" />
            </NavLink>
          </div>
          <nav id="navigation" className={styles.nav}>
            <MenuIcon menuHidden={menuHidden} menuAction={this._menuToggle} />
            <ul
              id="header-nav"
              className={styles.list}
              aria-expanded={menuHidden ? "false" : "true"}
              {...menuHidden && { hidden: true }}
            >
              {siteData.headerNav.map((navItem, i) => (
                <li key={i} className="style-as-h3">
                  <NavLink
                    to={navItem.link}
                    activeClassName={styles.activeLink}
                    onClick={this._menuClose}
                  >
                    {navItem.title}
                  </NavLink>
                </li>
              ))}
              <FullWidthSectionActionLink
                className={styles.bottomMenuLink}
                linkText="Schedule a meeting"
                onClick={this._menuClose}
                to="/contact/"
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
    const { menuHidden, menuAction } = this.props;
    let menuIcon;
    // Show navicon if hidden, show x if not.
    if (menuHidden) {
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
        aria-expanded={menuHidden ? "false" : "true"}
        aria-controls="header-nav"
        className={styles.menuIcon}
        onClick={menuAction}
      >
        <span className="sr-text">Menu</span>
        {menuIcon}
      </button>
    );
  }
}

const AuxanoLogo = (props = {}) => (
  <svg {...props} viewBox="0 0 125 48">
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <path
          d="M50.152 47.462h-.621l-.662-1.78h-2.648l-.662 1.78h-.621l2.4-5.876h.455zm-1.449-2.234l-1.117-3.021-1.158 3.02h2.275zm2.442 2.234v-5.876h1.572c.62 0 1.159 0 1.614.166.828.33 1.49 1.365 1.49 2.73 0 1.118-.414 2.028-1.035 2.525-.538.414-1.076.414-2.069.414h-1.572zm.58-.496h.868c.497 0 1.159 0 1.573-.166.579-.248 1.075-1.076 1.075-2.276 0-.993-.413-1.986-1.117-2.276-.33-.124-.662-.124-1.365-.124h-1.035v4.842zm7.241.496h-.497l-2.152-5.876h.62l1.822 5.131 1.862-5.13h.579zm4.22 0h-.58v-5.876h.58zm5.338-4.469a2.018 2.018 0 0 0-.248-.538c-.29-.414-.786-.58-1.283-.58-.62 0-1.365.25-1.365 1.035 0 .704.662.91.993 1.035.165.041.993.248 1.2.33.33.084 1.365.456 1.365 1.573 0 .828-.703 1.78-2.193 1.78-.62 0-1.076-.166-1.365-.373-.456-.29-.704-.745-.787-1.283l.538-.29c0 .249.042.497.124.704.249.538.87.745 1.49.745 1.117 0 1.655-.62 1.655-1.241a.951.951 0 0 0-.372-.787c-.248-.206-.62-.33-1.366-.496-.827-.207-1.779-.538-1.779-1.614 0-1.159 1.035-1.53 1.945-1.53 1.49 0 1.903.95 2.027 1.282zm6 3.848c-.58.662-1.283.787-1.78.787-.744 0-1.323-.207-1.82-.787-.414-.496-.745-1.241-.745-2.317 0-1.614.787-3.103 2.566-3.103 1.945 0 2.524 1.738 2.524 3.062 0 .91-.248 1.82-.745 2.358zm-1.738-4.924c-1.49 0-1.945 1.49-1.945 2.607 0 1.076.414 2.607 1.945 2.607 1.82 0 1.945-2.152 1.945-2.648-.041-1.076-.455-2.566-1.945-2.566zm8.276 5.545h-.703l-1.862-2.607H77.13v2.607h-.58v-5.917h1.656c1.034 0 1.283 0 1.655.124.952.331 1.035 1.283 1.035 1.572 0 .621-.249.952-.456 1.118-.413.413-.993.413-1.282.455l1.903 2.648zM77.09 44.36h1.365c.373 0 .745 0 .993-.042.621-.124.87-.62.87-1.076 0-.579-.29-.993-.87-1.117-.165-.041-.248-.041-.993-.041H77.09zm8.565-1.367a2.018 2.018 0 0 0-.248-.538c-.29-.414-.786-.58-1.283-.58-.62 0-1.365.25-1.365 1.035 0 .704.662.91.993 1.035.165.041.993.248 1.2.33.33.084 1.365.456 1.365 1.573 0 .828-.703 1.78-2.193 1.78-.62 0-1.076-.166-1.365-.373-.456-.29-.704-.745-.787-1.283l.58-.29c0 .249.041.497.124.704.29.538.869.745 1.49.745 1.117 0 1.655-.62 1.655-1.241a.951.951 0 0 0-.373-.787c-.248-.206-.62-.33-1.365-.496-.828-.207-1.78-.538-1.78-1.614 0-1.159 1.035-1.53 1.945-1.53 1.49 0 1.904.95 2.028 1.282l-.62.248z"
          fill="gray"
        />
        <path
          d="M6.331 20.276c-2.607 0-4.345.58-5.71 2.483v.041l1.282 1.117v-.041c.994-1.448 2.152-2.028 4.428-2.028 3.269 0 4.51 1.366 4.552 3.931v1.78H5.669C2.152 27.559 0 29.255 0 32.234c0 1.2.455 2.4 1.2 3.187 1.034 1.076 2.4 1.49 4.8 1.49 2.234 0 3.517-.414 4.883-1.78v1.572h1.78v-11.13c-.042-3.394-2.07-5.297-6.332-5.297zm-.372 15.02c-2.897 0-4.18-.993-4.18-3.103 0-2.152 1.324-3.227 4.097-3.227h5.007v2.068c0 1.49-.29 2.483-.91 3.063-1.118 1.075-2.525 1.2-4.014 1.2zm20.234-14.813v10.055c0 3.02-1.655 4.8-4.552 4.8-2.896 0-4.427-1.697-4.427-4.8V20.483h-1.78v10.345c0 1.903.621 3.475 1.697 4.51 1.035.993 2.483 1.531 4.303 1.531 1.945 0 3.518-.703 4.718-2.069v1.862h1.779v-16.18h-1.738zm11.462 7.903l5.255-7.903h-2.15l-4.014 6.455-4.055-6.455h-2.152l5.255 7.903-5.503 8.276h2.151l4.304-6.745 4.262 6.745h2.152zm12.828-8.11c-2.607 0-4.345.58-5.71 2.483v.041l1.282 1.117v-.041c.993-1.448 2.152-2.028 4.428-2.028 3.269 0 4.551 1.366 4.551 3.931v1.78h-5.213c-3.518 0-5.67 1.738-5.67 4.675 0 1.2.456 2.4 1.2 3.187 1.035 1.076 2.4 1.49 4.8 1.49 2.235 0 3.518-.414 4.883-1.78v1.572h1.78v-11.13c-.042-3.394-2.07-5.297-6.331-5.297zm4.51 8.69v2.068c0 1.49-.29 2.483-.91 3.063-1.117 1.117-2.524 1.24-4.014 1.24-2.897 0-4.18-.992-4.18-3.103 0-2.151 1.325-3.227 4.097-3.227h5.007zm15.89-7.159c-1.035-.993-2.483-1.531-4.304-1.531-1.945 0-3.517.703-4.717 2.069v-1.862h-1.78v16.22h1.78V26.648c0-3.02 1.655-4.8 4.552-4.8 2.855 0 4.427 1.697 4.427 4.8v10.055h1.78V26.36c-.042-1.945-.662-3.518-1.738-4.552zm15.145.248c-1.159-1.158-2.69-1.78-4.51-1.78-1.821 0-3.352.622-4.511 1.78-1.738 1.738-2.028 4.22-2.028 6.538 0 2.317.29 4.8 2.028 6.538 1.159 1.159 2.69 1.78 4.51 1.78s3.352-.621 4.51-1.78c1.739-1.697 2.028-4.22 2.028-6.538 0-2.317-.29-4.841-2.027-6.538zm-4.51 13.283a4.724 4.724 0 0 1-3.352-1.366c-1.325-1.324-1.449-3.517-1.449-5.379s.083-4.055 1.449-5.38c.868-.868 2.027-1.365 3.351-1.365 1.283 0 2.483.497 3.352 1.366 1.324 1.324 1.448 3.517 1.448 5.38 0 1.861-.083 4.054-1.448 5.378-.869.828-2.028 1.325-3.352 1.366z"
          fill="#50b8b8"
        />
        <path
          d="M124.759.497h-2.193l-42.621 14.44h3.103l32.193-10.675-19.49 10.676h3.104z"
          fill="#483898"
        />
        <path
          d="M90.703 0h-2.4l-8.358 14.938h3.103l6.373-11.71 6.33 11.71h3.104z"
          fill="#483898"
        />
      </g>
      <path
        d="M89.693 22.402h.283c.061 0 .12-.002.174-.006a.44.44 0 0 0 .145-.035.229.229 0 0 0 .102-.086.297.297 0 0 0 .038-.163.255.255 0 0 0-.034-.14.23.23 0 0 0-.088-.08.383.383 0 0 0-.124-.039.966.966 0 0 0-.137-.01h-.36v.559zm-.271-.78h.674c.207 0 .36.042.46.125s.15.209.15.377c0 .158-.044.274-.132.348a.59.59 0 0 1-.327.13l.499.776h-.291l-.475-.756h-.287v.756h-.271zm-.65.872c0 .185.03.355.093.512a1.201 1.201 0 0 0 1.139.777 1.184 1.184 0 0 0 .872-.37c.11-.114.196-.25.259-.407a1.37 1.37 0 0 0 .094-.512c0-.18-.032-.347-.094-.502a1.222 1.222 0 0 0-.648-.673 1.184 1.184 0 0 0-.483-.098 1.208 1.208 0 0 0-1.139.771 1.332 1.332 0 0 0-.094.502zm-.272 0A1.493 1.493 0 0 1 90.004 21a1.497 1.497 0 0 1 1.376.904c.08.182.12.378.12.59a1.489 1.489 0 0 1-.443 1.078 1.468 1.468 0 0 1-1.053.428 1.51 1.51 0 0 1-1.06-.428 1.489 1.489 0 0 1-.445-1.078z"
        fill="#50b8b8"
      />
    </g>
  </svg>
);

export default withSiteData(Header);
