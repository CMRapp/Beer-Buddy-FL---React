import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import './navigation.css';

function Navigation() {
   
  return (
    
    <Navbar expand="lg" className="navbar shadow-lg" sticky="top">
      <Container>
          <Navbar.Brand href="/home">
            <img
              alt="Beer Buddy Florida Logo"
              src="/img/bb-fl-logo.png"
              height="75"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills">
           {/*TODO - find how to highlight nav on page load */}
            <Nav.Link as={Link}  eventKey="/" to="/" >Home</Nav.Link>
            <Nav.Link as={Link}  eventKey="/beers" to="/beers">Beers</Nav.Link>
            <Nav.Link as={Link}  eventKey="/breweries" to="/breweries">Breweries</Nav.Link>

          </Nav>
          <Form className="d-flex ms-auto">
            <Form.Control
              type="search"
              placeholder="Search is inactive"
              className="me-2 disabled"
              aria-label="Search"
            />
            <Button variant="success disabled">Search</Button>
          </Form>
        </Navbar.Collapse>
     
      </Container>
    </Navbar>
  );
}
export default Navigation;