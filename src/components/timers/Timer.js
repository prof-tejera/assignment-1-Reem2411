import { Component } from "react";
import Button from "../Button/Button";
import Panel from "../Panel/Panel";
import React  from 'react';
import DisplayTime from "../DisplayTime/DisplayTime";
class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        time: {
            ms: 0,
            s:0, 
            m:0, 
            h:0}
        }
    }
    render() {
        
        return (
            <Panel>
                <h1> this is it </h1>
                <DisplayTime time={this.time}/>
                {this.round}
                <div className="TimerButton">
                    <Button 
                    text="Start"
                    onClick={() => {
                        console.log('MainTimer - clicked start');
                    }}
                    />
                    <Button
                    text="Pause"
                    onClick={() => {
                        console.log('MainTimer - clicked pause');
                    }}
                    />
                    <Button
                    text="Reset"
                    onClick={() => {
                        console.log('MainTimer - clicked reset');
                    }}
                    />
                </div>
                <div calssName="TimerFunctions">
                    {this.type}
                    <Button
                    text="Update"
                    onClick={() => {
                        console.log('Countdown - update clicked');
                    }}
                    />
                </div>           
            </Panel>
        )
    }
}

export default Timer;
