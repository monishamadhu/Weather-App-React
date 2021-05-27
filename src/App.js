import React from 'react';
import Weather from './components/WeatherComponent';
import './App.css';
import {createStore, applyMiddleware} from 'redux';
import {weatherForecast} from './redux/reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const myStore = createStore(weatherForecast, applyMiddleware(thunk,logger),
                            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                            );
function App() {
  return (

      <div className="App">
          <Weather/>
      </div>

  );
}

export default App;
