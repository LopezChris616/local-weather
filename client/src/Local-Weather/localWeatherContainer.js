import React, { Component } from "react";
import CurrentLocation from "./CurrentLocation";
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
        let loading = null;
        if(this.props.forecast.length < 1){
            loading = (
                <div>
                    <h1>Loading...</h1>
                    <i className="fas fa-spinner fa-3x"></i>
                </div>
            )
        }else {
            loading = (
                <div>
                    <CurrentWeather current={this.props.forecast.data && this.props.forecast.data.currently}/>
                    <WeeklyForecast weekly={this.props.forecast.data && this.props.forecast.data.daily}/>
                </div>
            ) 
            
        }
        // console.log(this.props.forecast);
        console.log(this.props.forecast.data);
        return(
            <div>
                <CurrentLocation 
                latitude={this.state.lat}
                longitude={this.state.lng}
                location={this.state.location}
                forecastData={this.props.forecast.data}
                />
                {loading}
            </div>
        )
    }
}

export default connect(state => ({forecast: state}), { getForecast })(localWeatherContainer);

