import React from 'react';
import {
  Navbar as BSNavbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const NavBar = () => {
  return (
    <BSNavbar bg="dark" variant="dark" expand="sm">
      <BSNavbar.Brand href="/">North Star Lodge</BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BSNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/maintenance">Maintenance</Nav.Link>
        </Nav>
      </BSNavbar.Collapse>
    </BSNavbar>
  );
};

export default NavBar;
