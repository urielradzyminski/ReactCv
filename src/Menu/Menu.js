import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css';
import React from 'react';
import { NavLink } from "react-router-dom";
const Menu = () => {
    const navLinkStyle = {
        color: "white",
        textDecoration: "none",
        padding: "0.5em",
    }
    return (
        <Navbar
            sticky="top"
            bg="primary"
            expand="sm"
            collapseOnSelect>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Navbar.Brand>
                    Hola
                    </Navbar.Brand> */}
            <Nav id="menuNav">
                <Nav.Item >
                        <NavLink 
                        style={navLinkStyle} to="/">
                            Home
                        </NavLink>
                </Nav.Item>
                <Nav.Item >
                        <NavLink 
                            style={navLinkStyle} 
                            to="/posts">
                            Posts
                        </NavLink>
                </Nav.Item>
                {/* <Nav.Item >
                    <Nav.Link>
                        <Link style={navLinkStyle} to="/Contact">
                            Contact
                            </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link>
                        <Link style={navLinkStyle} to="/about">
                            About
                            </Link>
                    </Nav.Link>
                </Nav.Item> */}
            </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default Menu;