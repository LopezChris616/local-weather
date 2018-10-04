import React from "react";
import Timestamp from "react-timestamp";
import Skycons from "react-skycons";
import CurrentLocation from "./CurrentLocation";

const CurrentWeather = props => {
    let icon = props.current.icon;
    for(let i = 0; i <= icon.length; i++){
        if(icon[i] === "-"){
          icon = icon.replace(icon[i], "_");
        }
      }
      icon = icon.toUpperCase();

    console.log(props.current);

    let backgroundPic = null;
    switch(icon){
        case "CLEAR_DAY":
            backgroundPic = {
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1495696674093-1cc47a6824a4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=25dee62c8299d0cca110991250a9c2ec&auto=format&fit=crop&w=1050&q=80')"
            }
            break;

        case "CLEAR_NIGHT":
            backgroundPic = {
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1500185497267-d635f9c5e90f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=85011254c0b46c4552f1c822334186fa&auto=format&fit=crop&w=1050&q=80')"
            }
            break;

        case "PARTLY_CLOUDY_DAY": 
            backgroundPic = {
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1475754358526-bad7b4b8eb05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=afd7f563ded92889e0f176c33596bb96&auto=format&fit=crop&w=967&q=80')"
            }
            break;
        
        case "PARTLY_CLOUDY_NIGHT":
            backgroundPic = {
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1477520353136-d75b998f342f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=77354021928dbd71be5fe33f57721e0e&auto=format&fit=crop&w=1050&q=80')"
            }
            break;

        case "CLOUDY":
            backgroundPic = {
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1504722754074-60e9f87d2817?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4b3534f2b1b10ecbc4c150e5397c5fe0&auto=format&fit=crop&w=1050&q=80')"
            }
            break;

        case "RAIN":
            backgroundPic = {
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=736f98d0e4cc173e3bf6411a58913e37&auto=format&fit=crop&w=1050&q=80')"
            }
            break;

        case "SLEET":
            backgroundPic = {
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1507181080368-cc2195abcde1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=978125364de8367b8209b7b9a7e1fad5&auto=format&fit=crop&w=1189&q=80')"
            }
            break;

        case "SNOW":
            backgroundPic = {
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1521903146409-7165ad695b34?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c964ba402571450bf5c2c918d062c237&auto=format&fit=crop&w=1035&q=80')"
            }
            break;

        case "WIND":
            backgroundPic = {
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1424786194759-3e6b91d8d3bb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e4c942b7edc31db6c6a72fb1ac4bd376&auto=format&fit=crop&w=1050&q=80')"
            }
            break;

        case "FOG":
            backgroundPic = {
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1508165821229-7be282c31b6e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d75acd957c5566d9b971e88a9e68076a&auto=format&fit=crop&w=1050&q=80')"
            }
            break;

        default:
            backgroundPic = {
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1517511620798-cec17d428bc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a65984a12051e9753f748c5909faca97&auto=format&fit=crop&w=1050&q=80')"
            }
            break;
    }

    return(
        <div id="current" style={backgroundPic}>
            <div id="currentInfo">
                <h2 id="time">As of: <Timestamp time={props.current && props.current.time} format="full"/></h2>
                <CurrentLocation 
                latitude={props.latitude}
                longitude={props.longitude}
                location={props.location}
                />
                <h2>{props.current && props.current.summary}</h2>
                <p>Temperature: {props.current && Math.round(props.current.temperature)} F</p>
                <p>Wind Speed: {props.current && Math.round(props.current.windSpeed)} MPH</p>
            </div>
            <Skycons color="white" icon={icon} style={{width: "305px"}} />
        </div>
    )
}

export default CurrentWeather;