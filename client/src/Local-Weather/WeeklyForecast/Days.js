import React from 'react';
import Timestamp from "react-timestamp";

const Days = props => {
    return(
        <div>
            <h3><Timestamp time={props.day} format="date" /></h3>
            <p>{props.summary}</p>
            <p>High: {Math.round(props.tempHigh)} F</p>
            <p>Low: {Math.round(props.tempLow)} F</p>
            <p>Wind Speed: {Math.round(props.wind)} MPH</p>
            <p>Sunrise: <Timestamp time={props.sunrise} format="time" /></p>
            <p>Sunset: <Timestamp time={props.sunset} format="time" /></p>
        </div>
    )
}

export default Days;