import React from "react";

const CurrentLocation = props => {
    return(
        <div>
            <h1 id="location">Location Name: {props.location}</h1>
            <p>Latitude: {props.latitude}</p>
            <p>Longitude: {props.longitude}</p>
        </div>
    )
}

export default CurrentLocation;