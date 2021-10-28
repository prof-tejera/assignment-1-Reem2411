import React, { Component } from 'react';
import './panel.css';

class Panel extends Component {
  render() {
    return <div className="Default-panel">{this.props.children}</div>;
  }
}

export default Panel;
