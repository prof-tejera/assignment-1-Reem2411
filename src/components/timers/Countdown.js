import React from "react";
import Button from "../generic/Button/Button";
import DisplayTime from "../generic/DisplayTime/DisplayTime";
import Input from "../generic/Input/Input";
import TimerButtons from "../generic/TimerButtons/TimerButtons";
import './Timers.css'

class Countdown extends React.Component {
  constructor() {
    super();
    this.state = {
      time: {
          ms: 0,
          s:0, 
          m:0, 
          h:0}
      
      };
  }

  render() {
    return (
      <div className="outerPanel">
        <h1> Countdown </h1>  
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">     
              <div className="card-DisplayTime">
                <DisplayTime/>
              </div>  
              
            </div>
            <div className="flip-card-back">
              <div className="inputs">
                <Input
                  placeholder="Work Time (s)"
                  type="work"
                  onChange={v => {
                    console.log('Countdown - work time set to', v);
                  }}
                />
              </div>
              <Button
                text="Update"
                onClick={() => {
                    console.log('Countdown - update clicked');
                }}
                />
            </div>
          </div> 
      </div>   
      <TimerButtons/>       
      </div>
    );
  }
}

export default Countdown;
