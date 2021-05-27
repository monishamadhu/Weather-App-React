import React, { Component } from 'react';

import Header from './HeaderComponent';


import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchWeather } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';



class Main extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <Header/>
                <Weather/>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));