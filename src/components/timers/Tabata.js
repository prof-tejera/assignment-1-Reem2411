import React from "react";

class Tabata extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTimer: false,
    };
  }

  render() {
    return (
      <button className={`Timer-button ${this.props.current ? 'current' : ''}`} onClick={this.props.onClick}>
        <p>Tabata</p>
      </button>
    );
  }
}

export default Tabata;
