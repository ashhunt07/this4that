import React from "react";

// importing styling
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Import Other Components
import MainNav from './main-nav';
import AuthNav from './auth-nav';

const NavBar = () => {
  return (
    // update classnames for styling---please do not edit wrapping code--it will break user authentication
    
    <Navbar collapseOnSelect expand="lg" className="navBar" variant="dark">
    <Navbar.Brand>
    <img
        src="https://github.com/xtasherx/project3/blob/main/client/public/this2that-logo.png?raw=true"
        width="200"
        className="d-inline-block align-middle"
        alt="this4that logo"
      />
    </Navbar.Brand> 

    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="btn" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
            <MainNav />
            <AuthNav />
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;


