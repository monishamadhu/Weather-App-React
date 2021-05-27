import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col">
                        <h1>Weather Forecast App</h1>
                    </div>
                </div>
            </div>
        </Jumbotron>
    );
}

export default Header;