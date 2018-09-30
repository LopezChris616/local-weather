import React, { Component } from "react";
import CurrentLocation from "./CurrentLocation";
import CurrentWeather from "./CurrentWeather";
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
        navigator.geolocation.getCurrentPosition(position => {
          this.setState({ 
              lat: position.coords.latitude, lng: position.coords.longitude 
            });

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
        return(
            <div>
                <CurrentLocation 
                latitude={this.state.lat}
                longitude={this.state.lng}
                location={this.state.location}
                forecastData={this.props.forecast.data}
                />
                <CurrentWeather current={this.props.forecast.data && this.props.forecast.data.currently}/>
            </div>
        )
    }
}

export default connect(state => ({forecast: state}), { getForecast })(localWeatherContainer);

