import React from "react";
import DisplayTime from "../generic/DisplayTime/DisplayTime";
import DisplayRounds from "../generic/DisplayRounds/DisplayRounds";
import Button from "../generic/Button/Button";
import Input from "../generic/Input/Input";
import TimerButtons from "../generic/TimerButtons/TimerButtons";
import './Timers.css'

class Tabata extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTimer: false,
    };
  }

  render() {
    const { rounds, rest, work } = this.props;
    let roundProps = {
      rounds: this.props.rounds, 
      rest: this.props.rest}
    return (
      <div className="outerPanel">
        <h1> Tabata </h1> 
        <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="card-DisplayTime">          
              <DisplayTime />
            </div>
          </div>
          <div className="flip-card-back">
            <div className="inputs">
              <Input
                placeholder="Work Time (s)"
                type="work"
                onChange={v => {
                  console.log('Tabata - work time set to', v);
                  this.props.work = v;
                }}
              />
              <Input
                placeholder="Rest Time (s)"
                type="rest"
                onChange={v => {
                  console.log('Tabata - rest time set to', v);
                  this.props.rest = v;
                }}
              />              
              <Input
                placeholder="Rounds (s)"
                type="rounds"
                onChange={v => {
                  console.log('Tabata - rounds set to', v);
                  this.props.rounds = v;
                }}
              />
            </div>
            <div>
              <Button
                text="Update"
                onClick={() => {
                    console.log('Tabata - update clicked');
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

export default Tabata;
