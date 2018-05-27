import React from "react";

class ThirdColumn extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className="col-xs-4">
        <h4>{title}</h4>
        {children}
      </div>
    );
  }
}

export default ThirdColumn;
