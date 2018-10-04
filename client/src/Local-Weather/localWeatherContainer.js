import React, { Component } from "react";
import CurrentWeather from "./CurrentWeather";
import WeeklyForecast from "./WeeklyForecast/WeeklyForecast";
import { getForecast } from "../redux/local-weather";
import { connect } from "react-redux";
import Geocode from "react-geocode";

class localWeatherContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            lat: "",
            lng: "",
            location: ""
          }
    }

    componentDidMount = () => {

        //grabs your current location and sets state with the returned
        //latitude and longitude
        navigator.geolocation.getCurrentPosition(position => {
          this.setState({ 
              lat: position.coords.latitude, lng: position.coords.longitude 
            });

            //converts the returned coordinates to an address (city, state, country)
            //and sets state of location to include that address
            Geocode.setApiKey("AIzaSyDCU_sR1UA5seRsI-3OuP-jHKEkr06TZPk");
            Geocode.fromLatLng(String(this.state.lat), String(this.state.lng)).then(response => {
                    this.setState({
                        location: response.plus_code.compound_code
                    })
                }, error => {
                    console.error(error);
                }
          );
            this.props.getForecast(this.state.lat, this.state.lng);
        });
    }


    render(){
        //loading screen while the data gets mounted
        let loading = null;
        if(this.props.forecast.length < 1){
            loading = (
                <div id="loading">
                    <h1>Loading Weather Data...</h1>
                    <i className="fas fa-spinner fa-3x"></i>
                </div>
            )
        }else {
            //displayed once the data returns and displays the current and weekly weather
            loading = (
                <div id="your-weather">
                    <CurrentWeather 
                    current={this.props.forecast.data && this.props.forecast.data.currently}
                    latitude={this.state.lat}
                    longitude={this.state.lng}
                    location={this.state.location}
                    forecastData={this.props.forecast.data}
                    />
                    <WeeklyForecast weekly={this.props.forecast.data && this.props.forecast.data.daily}/>
                </div>
            ) 
            
        }
        return(
            <div>
                {loading}
            </div>
        )
    }
}

export default connect(state => ({forecast: state}), { getForecast })(localWeatherContainer);

