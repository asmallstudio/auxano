import React, { Component } from "react";

// https://github.com/mauricevancooten/react-anchor-link-smooth-scroll/blob/master/src/anchor-link.js

class AnchorLink extends Component {
  constructor(props) {
    super(props);
    this.smoothScroll = this.smoothScroll.bind(this);
  }
  componentDidMount() {
    require("smoothscroll-polyfill").polyfill();
  }
  smoothScroll(e) {
    e.preventDefault();
    let offset = () => 0;
    if (typeof this.props.offset !== "undefined") {
      if (
        this.props.offset &&
        this.props.offset.constructor &&
        this.props.offset.apply
      ) {
        ({ offset } = this.props);
      } else {
        offset = () => parseInt(this.props.offset);
      }
    }
    const id = e.currentTarget.getAttribute("href").slice(1);
    window.scroll({
      top: document.getElementById(id).offsetTop - offset(),
      behavior: "smooth",
    });
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }
  render() {
    return (
      <a {...this.props} onClick={this.smoothScroll}>
        {this.props.children}
      </a>
    );
  }
}

export default AnchorLink;
