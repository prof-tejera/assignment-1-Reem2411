import React from "react";
import {MyPropTypes} from "../MyProptypes"


class DisplayRounds extends React.Component{
    constructor() {
        super();
        this.state = {
            roundProps : false,
            rounds: 0,
            current: 0,
            rest: true
        };
    }

    render () {
        const { rounds, currRound, rest } = this.props;
        return (
            <p > Round: {0} </p>
        )

        
    }
}

DisplayRounds.defaultProps = {
    rounds: 0,
    current: 0,
    rest: true
}


export default DisplayRounds