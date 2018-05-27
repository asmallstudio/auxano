import React from "react";

class ThirdColumn extends React.Component {
  render() {
    const { title, text, textColor } = this.props;
    return (
      <div className="col-xs-4">
        <h4>{title}</h4>
        <p style={{ color: textColor }}>{text}</p>
      </div>
    );
  }
}

export default ThirdColumn;
