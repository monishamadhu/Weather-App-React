import * as ActionTypes from './ActionTypes';

export const weatherForecast = (state = {
        errMess:null,
        isLoading: false,
        data:null
    }, action) => {
    
        switch(action.type) {
        case ActionTypes.GET_WEATHER:
            return{ ...state, errMess:null, isLoading:false, data:action.payload}
        
        case ActionTypes.WEATHER_LOADING:
            return{ ...state, errMess:null, isLoading:true, data:null}
        
        case ActionTypes.WEATHER_FAILED:
            return {...state, errMess: action.payload, isLoading:false, data: null }
        
        default:
            return state;
    }
}