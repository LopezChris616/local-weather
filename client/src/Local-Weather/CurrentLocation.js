import React from "react";

const CurrentLocation = props => {
    return(
        <div>
            <h1>Current Position</h1>
            <p>Latitude: {props.latitude}</p>
            <p>Longitude: {props.longitude}</p>
            <p>Location Name: {props.location}</p>
        </div>
    )
}

export default CurrentLocation;