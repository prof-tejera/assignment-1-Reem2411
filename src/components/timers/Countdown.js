import React from "react";

class Countdown extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTimer: false,
    };
  }

  render() {
    return (
      <button className={`Timer-button ${this.props.current ? 'current' : ''}`} onClick={this.props.onClick}>
        <p>Countdown</p>
      </button>
    );
  }
}

export default Countdown;
