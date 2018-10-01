import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const getForecast = (latitude, longitude) => {
    return dispatch => {
        axios.get(`https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/8d7f0d75a142c7e18e0b5c6be232f22e/${latitude},${longitude}`).then(response => {
            dispatch({
                type: "GET_FORECAST",
                forecast: response
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

export const reducer = (state = [], action) => {
    switch(action.type){
        case "GET_FORECAST":
            return action.forecast;
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;