import React from "react";
import {Button, Card, ButtonGroup, Container} from 'react-bootstrap';
import { UpdateBreweryForm } from "./UpdateBreweryForm";

import './breweries.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

import axios from "axios";

export default function BreweryCard({ brewery,  fetchData, deleteBrewery }) {

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
                        <ButtonGroup>
                            <UpdateBreweryForm breweryId={brewery.id} fetchData={fetchData}/>
                            <Button variant="danger" onClick={() => deleteBrewery(brewery.id)}>Delete <FontAwesomeIcon icon={faTrashCan} /></Button>
                        </ButtonGroup>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
}