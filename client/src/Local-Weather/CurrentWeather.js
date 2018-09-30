import React from "react";
import Timestamp from "react-timestamp";

const CurrentWeather = props => {
    console.log(props.current && props.current.time);
    return(
        <div>
            <h2>As of: <Timestamp time={props.current && props.current.time} format="full" /></h2>
            <h2>{props.current && props.current.summary}</h2>
            <p>Temperature: {props.current && Math.round(props.current.temperature)}F</p>
            <p>Wind Speed: {props.current && Math.round(props.current.windSpeed)} MPH</p>
        </div>
    )
}

export default CurrentWeather;