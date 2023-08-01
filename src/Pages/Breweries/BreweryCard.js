import React from "react";
import {Button, Card, ButtonGroup} from 'react-bootstrap';
import { UpdateBreweryForm } from "./UpdateBreweryForm";

import './breweries.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

import axios from "axios";

export default function BreweryCard({ brewery,  fetchData, deleteBrewery }) {

    //define BREWERIES endpoint
    const Endpoint = "https://64bedc3b5ee688b6250d0246.mockapi.io/breweries";

    return (
        <>
            <Card style={{ flex:1, width: '350px'}} className='brewery-card my-2'>
                <Card.Header>{brewery.name}</Card.Header>
                <Card.Img src={brewery.logoURL} alt={brewery.name} className=' img-responsive img-fluid mx-auto mt-2' />
                <Card.Body>
                    
                    <Card.Text className='listing-info'>
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
        </>
    );
}