import * as ActionTypes from './ActionTypes';
import { baseUrl,key } from '../baseUrl';

export const fetchWeather = (city) => (dispatch) => {
        
    return fetch(`${baseUrl}${city},us&&appid=${key}`)
    .then(response => {
        if(response.ok){
            return response;
        } else {
            var error = new Error('Error'+ response.status + ':' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(weather => dispatch(getWeather(weather)))
    .catch(error => dispatch(weatherFailed(error.message)));
}

export const weatherFailed = (errmess) => ({
    type: ActionTypes.WEATHER_FAILED,
    payload: errmess
});

export const getWeather = (weather) => ({
    type: ActionTypes.GET_WEATHER,
    payload: weather
});