import React from "react";
import Days from "./Days";

const WeeklyForecast = props => {
    const week = props.weekly && props.weekly.data.map((day, i) => {
        return (
            <Days 
            key={i} 
            summary={day.summary} 
            tempHigh={day.temperatureHigh}
            tempLow={day.temperatureLow}
            sunset={day.sunsetTime}
            sunrise={day.sunriseTime}
            wind={day.windSpeed}
            day={day.time}
            icon={day.icon} />
        )
    })
    return(
        <div>
            <div id="weekly-intro">
                <h1>Weekly Forecast</h1>
                <h2>Summary: {props.weekly && props.weekly.summary}</h2>
            </div>
            <div id="weekly-forecast">
                {week}
            </div>
        </div>
    )
}

export default WeeklyForecast;