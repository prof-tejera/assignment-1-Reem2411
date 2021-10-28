import React from "react";
import DisplayTime from "../generic/DisplayTime/DisplayTime";
import Button from "../generic/Button/Button";
import Input from "../generic/Input/Input";
import TimerButtons from "../generic/TimerButtons/TimerButtons";
import './Timers.css'

class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTimer: true,
    };
  }

  render() {
    return (
      <div className="outerPanel">
        <h1> Stopwatch </h1> 
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-DisplayTime">
                  <DisplayTime/>
                </div>      
              </div>
              <div className="flip-card-back">
                <div className="back_content">
                  <div className="inputs">
                    <Input
                      placeholder="Work Time (s)"
                      type="work"
                      onChange={v => {
                        console.log('Stopwatch - work time set to', v);
                      }}
                    />
                  </div>
                  <Button
                    text="Update"
                    onClick={() => {
                        console.log('Stopwatch - update clicked');
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

export default Stopwatch;
