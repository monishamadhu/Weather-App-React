import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import App from './App';
import myStore from './App';
import { Provider } from 'react-redux';



ReactDOM.render(
<Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);


