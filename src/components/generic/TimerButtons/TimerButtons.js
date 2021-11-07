import Button from '../Button/Button.js';
import React, { Component} from 'react';
import './TimerButtons.css'

class TimerButtons extends Component {
  constructor() {
    super();
    this.state = {
      current: false,
    };
  }
  render() {
    return (
      <div className="ButtonsPanel">
        <div className="TimerButton">
          <Button
            text="Start"
            onClick={() => {
              console.log('MainTimer - clicked start');
              this.setState({
                current: true,
              });
            }}
          />
          <Button
            text="Pause"
            onClick={() => {
              console.log('MainTimer - clicked pause');
              this.setState({
                current: true,
              });
            }}
          />
          <Button
            text="Reset"
            onClick={() => {
              console.log('MainTimer - clicked reset');
              this.setState({
                current: true,
              });
            }}
          />
        </div>
      </div>

    );
  }
}
  
export default TimerButtons;
  