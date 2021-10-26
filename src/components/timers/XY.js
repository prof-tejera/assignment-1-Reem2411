import React from "react";

class XY extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTimer: false,
    };
  }

  render() {
    return (
      <button className={`Timer-button ${this.props.current ? 'current' : ''}`} onClick={this.props.onClick}>
        <p>XY</p>
      </button>
    );
  }
}

export default XY;
