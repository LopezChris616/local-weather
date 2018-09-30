import React from 'react';
import Timestamp from "react-timestamp";

const Days = props => {
    return(
        <div>
            <p><Timestamp time={props.day} format="date"/></p>
            <p>{props.summary}</p>
            <p>High: {Math.round(props.tempHigh)} F</p>
            <p>Low: {Math.round(props.tempLow)} F</p>
        </div>
    )
}

export default Days;