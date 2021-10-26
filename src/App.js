// import {useState } from 'react';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";
// import TimerButtons from "./TimerButtons/TimerButtons";
import Setup from "./Setup/Setup";
import './App.css';
import DisplayTime from "./components/DisplayTime/DisplayTime";
// import DisplayTime from './components/DisplayTime/DisplayTime.js';

const Container = styled.div`
  background: #f0f6fb;
  height: 100vh;
  overflow: auto;
`;

function App() {
  const time = {ms:0, s:0, m:0, h:0}
  return (
    <Container>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Timers</Link>
            </li>
            <li>
              <Link to="/docs">Documentation</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/docs">
            <DocumentationView />
          </Route>
          <Route path="/">
            <div className="FullScreen">
              <div className="LeftScreen">
                <div className="TimersView">
                  <TimersView />
                </div>
                <div className="SetupView">
                  <Setup />
                </div>
              </div>
              <div className="RightScreen">
                  {/* <div className="TimerType"> Timer </div> */}
                  <div className="CounterView">
                    <DisplayTime time={time}/>
                  </div>
                  {/* <div className="ButtonsView">
                    <TimerButtons/>
                  </div> */}
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
