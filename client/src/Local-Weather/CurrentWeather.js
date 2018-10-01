import React from "react";
import Timestamp from "react-timestamp";
import Skycons from 'react-skycons'

const CurrentWeather = props => {
    let icon = props.current.icon;
    for(let i = 0; i <= icon.length; i++){
        if(icon[i] === "-"){
          icon = icon.replace(icon[i], "_");
        }
      }
      icon = icon.toUpperCase();

    
    console.log(props.current);
    return(
        <div>
            <h2>As of: <Timestamp time={props.current && props.current.time} format="full"/></h2>
            <Skycons color="black" icon={icon} style={{width: "115px"}} />
            <h2>{props.current && props.current.summary}</h2>
            <p>Temperature: {props.current && Math.round(props.current.temperature)} F</p>
            <p>Wind Speed: {props.current && Math.round(props.current.windSpeed)} MPH</p>
        </div>
    )
}

export default CurrentWeather;