import { Component } from "react";
import Panel from "../Panel/Panel";
import React  from 'react';
import DisplayRounds from "../DisplayRounds/DisplayRounds";
import './DisplayTime.css';

class DisplayTime extends Component {
    render() {
        let { roundProps, h, m, s, ms } = this.props;
        return (
            <Panel>
                <div className="Timer">
                        <span>{this.props.h}</span>&nbsp;:&nbsp;
                        <span>{this.props.m}</span>&nbsp;:&nbsp;
                        <span>{this.props.s}</span>&nbsp;:&nbsp;
                        <span>{this.props.ms}</span>&nbsp;&nbsp;
                </div>
                <div className="roundsinTimer"> 
                    {this.props.roundprops && <DisplayRounds rounds={this.props.roundProps}/>}                                           
                </div>   
            </Panel>
        )
    }
}

DisplayTime.defaultProps = {
    roundProps: false,
    ms: 0,
    s:0, 
    m:0, 
    h:0
}


export default DisplayTime;
