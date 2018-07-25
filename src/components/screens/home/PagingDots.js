import React from "react";
const theme = require("../../../lib/theme.json");

//from: https://github.com/FormidableLabs/nuka-carousel/blob/master/src/default-controls.js#L63

class PagingDots extends React.Component {
  getIndexes(count, inc) {
    const arr = [];
    for (let i = 0; i < count; i += inc) {
      arr.push(i);
    }
    return arr;
  }

  getListStyles() {
    return {
      position: "relative",
      margin: 0,
      marginTop: -20,
      top: -10,
      padding: 0
    };
  }

  getListItemStyles() {
    return {
      listStyleType: "none",
      display: "inline-block"
    };
  }

  getButtonStyles(active) {
    return {
      border: 0,
      background: "transparent",
      color: theme["fountain-blue"],
      cursor: "pointer",
      padding: 10,
      paddingTop: 0,
      outline: 0,
      fontSize: 24,
      opacity: active ? 1 : 0.4
    };
  }

  render() {
    const indexes = this.getIndexes(
      this.props.slideCount,
      this.props.slidesToScroll
    );
    return (
      <ul style={this.getListStyles()}>
        {indexes.map(index => {
          return (
            <li style={this.getListItemStyles()} key={index}>
              <button
                style={this.getButtonStyles(this.props.currentSlide === index)}
                onClick={this.props.goToSlide.bind(null, index)}
              >
                &bull;
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default PagingDots;
