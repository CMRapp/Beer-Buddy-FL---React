import React from "react";
import {Button, Card, ButtonGroup, Container} from 'react-bootstrap';
import { UpdateBreweryForm } from "./UpdateBreweryForm";
import BreweryDetails from "./BreweryDetails";

import { Link } from "react-router-dom";

import './breweries.css';

import axios from "axios";

export default function BreweryCard({brewery}) {

    //define BREWERIES endpoint
    const Endpoint = "https://64bedc3b5ee688b6250d0246.mockapi.io/breweries";

    return (
        <div>
            <Card  className='brewery-card my-1'>
                <Card.Header>{brewery.name}</Card.Header>
                <div style={{ height:'80px'}} className="mb-2 mx-2">
                <Card.Img src={brewery.logoURL} alt={brewery.name} className=' img-responsive img-fluid mx-auto mt-2' /></div>
                <Card.Body>
                    
                    <Card.Text className='brewery-listing-info'>
                        {brewery.address1}<br/>
                        {brewery.city}, FL {brewery.zip}
                        <br/><a href={brewery.website} target="_blank">{brewery.website}</a>
                    </Card.Text>
                    
                    <Card.Footer>
                            <Link to={`/brewery-details/${brewery.id}`} element={<BreweryDetails/>} className='btn btn-warning'>View Brewery Page</Link>                       
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
}