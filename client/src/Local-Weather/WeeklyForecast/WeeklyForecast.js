import React from "react";
import Days from "./Days";

const WeeklyForecast = props => {
    console.log(props.weekly);
    const week = props.weekly && props.weekly.data.map((day, i) => {
        return (
            <Days 
            key={i} 
            summary={day.summary} 
            tempHigh={day.temperatureHigh}
            tempLow={day.temperatureLow}
            day={day.time} />
        )
    })
    return(
        <div>
            <h1>Weekly Forecast</h1>
            <h2>Summary: {props.weekly && props.weekly.summary}</h2>
            {week}
        </div>
    )
}

export default WeeklyForecast;