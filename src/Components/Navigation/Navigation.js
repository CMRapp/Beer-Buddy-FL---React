import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import Home from '../../Pages/Home/Home';
import Beers from '../../Pages/Beers/Beers';
import Breweries from '../../Pages/Breweries/Breweries';
import Reviews from '../../Pages/Reviews/Reviews';
import Styles from '../../Pages/Styles/Styles';
import NotFound from '../../Pages/NotFound/NotFound';
import BeerDetails from '../../Pages/Beers/BeerDetails';

import './navigation.css';

function Navigation() {
   
  return (
    
   <BrowserRouter>
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
            <Nav.Link as={Link}  eventKey="/" to="/">Home</Nav.Link>
            <Nav.Link as={Link}  eventKey="/beers" to="/beers">Beers</Nav.Link>
            <Nav.Link as={Link}  eventKey="/breweries" to="/breweries">Breweries</Nav.Link>
            <Nav.Link as={Link}  eventKey="/styles" to="/styles">Styles</Nav.Link>
            <Nav.Link as={Link}  eventKey="/reviews" to="/reviews">Reviews</Nav.Link>

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

    <Routes>
        <Route exact path="/" activeClassName="active"  element={<Home />}/>
        <Route path="/beers" activeClassName="active" element={<Beers />}/>
        <Route path="/breweries" activeClassName="active" element={<Breweries />}/>
        <Route path="/styles" activeClassName="active" element={<Styles />}/>
        <Route path="/reviews" activeClassName="active" element={<Reviews />}/>
        <Route path="/beer-details:key" activeClassName="active" element={<BeerDetails />}/>
        <Route  path="*" element={<NotFound />}/>

    </Routes>
    </BrowserRouter>
  );
}
export default Navigation;