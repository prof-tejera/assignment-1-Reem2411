import React from "react";
// import styled from "styled-components";
import Panel from "../components/Panel/Panel";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
// import DisplayTime from "../components/DisplayTime/DisplayTime";
// import DisplayRounds from "../components/DisplayRounds/DisplayRounds";
// import TimerButtons from "../TimerButtons/TimerButtons";
// import Screen from "../components/screen/Screen";

import './TimersView.css';

// const Timers = styled.div`
//   padding: 20px;
//   width: 320px;
//   height: 150px;
//   display: flex;
//   flex-wrap:  wrap;
//   align-items: right;
//   background: white; 
// `;

function App() {
  const timers = [
    { C: <Stopwatch /> },
    { C: <Countdown /> },
    { C: <XY /> },
    { C: <Tabata /> },
  ];
  
  return (
    <Panel>
      {/* <Stopwatch
      onClick={() => {
        // <Panel className="MainTimerView">
        //   <DisplayTime/>
        //   <TimerButtons/>
        // </Panel>
        console.log('TimersView - StopWatch Clicked');
        this.setState({
          currentTimer: true,
        });
      }}  
      /> */}

      {timers.map((timer) => (
        timer.C
      ))}
    </Panel>
  );
}

export default App;
