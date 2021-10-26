import React from "react";

class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTimer: true,
    };
  }

  render() {
    return (
      <button className={`Timer-button ${this.props.current ? 'current' : ''}`} onClick={this.props.onClick}>
        <p>Stopwatch</p>
      </button>
    );
  }
}

export default Stopwatch;
