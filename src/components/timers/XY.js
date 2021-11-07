import React from "react";
import DisplayTime from "../generic/DisplayTime/DisplayTime";
import DisplayRounds from "../generic/DisplayRounds/DisplayRounds";
import Button from "../generic/Button/Button";
import Input from "../generic/Input/Input";
import TimerButtons from "../generic/TimerButtons/TimerButtons";
import './Timers.css'

class XY extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTimer: false,
    };
  }

  render() {
    const { rounds, roundTime} = this.props;
    return (
      <div className="outerPanel">
        <h1> XY </h1> 
        <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="card-DisplayTime">
              <DisplayTime rounds={<DisplayRounds round={this.props.rounds}/>}/>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="inputs">
              <Input
                placeholder="Time per Round (s)"
                type="roundtime"
                onChange={v => {
                  console.log('XY - time per rounds set to', v);
                  this.props.roundTime = v;
                }}
              />
              <Input
                placeholder="Rounds (s) "
                type="rounds"
                onChange={v => {
                  console.log('XY - rounds set to', v);
                  this.props.rounds = v;
                }}
              />
            </div>
            <div>
              <Button
                text="Update"
                onClick={() => {
                    console.log('XY - update clicked');
                }}
                />
              </div>
          </div>
        </div>
      </div>
      <TimerButtons/>        
      </div>
    );
  }
}

export default XY;
