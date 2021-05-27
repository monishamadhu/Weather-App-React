import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav,  NavItem, Jumbotron,  Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { fetchWeather } from '../redux/ActionCreators';
//import { NavLink } from 'react-router-dom';

class Weather extends Component {


    render() {
        return (
            <React.Fragment>
                

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Form >
                                <FormGroup>
                                    <Label htmlFor="cityname">City Name</Label>
                                    <Input type="text" id="cityname" placeholder="City Name" name="cityname"
                                        innerRef={(input) => this.cityname = input} />
                                </FormGroup>
                                <div className="col-md-6">
                                    <Button color="info" type="submit" value="submit" onClick = { () => dispatch(fetchWeather()) }>Submit Query</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Weather;