import * as ActionTypes from './ActionTypes';

export const WeatherForecast = (state = {
        errMess:null,
        weather:[]
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_WEATHER:
            return{ ...state, errMess:null, weather:action.payload}
        
        case ActionTypes.PROMOS_FAILED:
            return {...state, errMess: action.payload, weather:[] }
        default:
            return state;
    }
}