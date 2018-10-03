import React from 'react';
import Timestamp from "react-timestamp";
import Skycons from "react-skycons";

const Days = props => {
    let icon = props.icon;
    for(let i = 0; i <= icon.length; i++){
        if(icon[i] === "-"){
          icon = icon.replace(icon[i], "_");
        }
      }
      icon = icon.toUpperCase();

    return(
        <div id="weekday">
        <Skycons color="black" icon={icon} style={{width: "95px"}} />
            <h3 id="weekday-date"><Timestamp time={props.day} format="date" /></h3>
            <p>High: {Math.round(props.tempHigh)} F</p>
            <p>Low: {Math.round(props.tempLow)} F</p>
            <p>Wind Speed: {Math.round(props.wind)} MPH</p>
            <p>Sunrise: <Timestamp time={props.sunrise} format="time" /></p>
            <p>Sunset: <Timestamp time={props.sunset} format="time" /></p>
        </div>
    )
}

export default Days;