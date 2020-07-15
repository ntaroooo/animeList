import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LOGO from '../logo.svg';

class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home" style={{fontSize: "2.0em"}}  >
                    <img
                        src={LOGO}
                        width="30"
                        height="60"
                        alt="React Bootstrap logo"

                    />
                    Battle
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="mr-auto"style={{fontSize: "2.0em"}} >
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#romantic">Romantic</Nav.Link>
                        <Nav.Link href="#school">School Life</Nav.Link>
                        <Nav.Link href="#robot">Robot</Nav.Link>
                        <Nav.Link href="#term">This term</Nav.Link>
                        <Nav.Link href="#favorite">My favorite</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        );
    }
}
export default Navigation;