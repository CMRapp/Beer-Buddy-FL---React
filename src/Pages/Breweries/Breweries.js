import React,  { useState, useEffect} from "react";
import {Container, Row, Col, Image, Table, Tooltip, Button, ButtonGroup, Card, CardGroup } from 'react-bootstrap';
import BreweryLogoScroller from './BreweryLogoScroller';
import CountyTable from "./CountyTable";
import BreweryNotes from "./BreweryNotes";
import { NewBreweryForm } from "./NewBreweryForm";
import { UpdateBreweryForm } from "./UpdateBreweryForm";
import './breweries.css';

import axios from "axios";


//functional component
export default function Breweries() {

    //define BREWERIES endpoint
    const Endpoint = "https://64bedc3b5ee688b6250d0246.mockapi.io/breweries";

    //create array to hold logo information and use useState to create an empty array
    const [breweryList, setBreweryList] = useState([]);

    // API Call -gets list of breweries
    async function fetchData() {
        try {
          const response = await axios.get(Endpoint);
          setBreweryList(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

    //useEffect prepares page for rendering | Calls fetchData()
    useEffect(() => {
        fetchData();
      }, [Endpoint]);

    //async function to delete a brewery
    async function deleteBrewery(breweryId) {
        try {
            const resp = await axios.delete(`${Endpoint}/${breweryId}`);

            //update state to reflect deleted brewery using filter
            setBreweryList((breweryList) =>
                breweryList.filter((brewery) => brewery.id !== breweryId)
            );

        } catch (error) {
            console.log("Error Deleting Brewery! ", error);
        }
    };

      // render complete Breweries component JSX
    return (
        <>
            <Image src="./img/craft-beer-hero.png" className="my-3 d-block mx-auto img-fluid" />

            <Container>
                <Row className="text-center">
                    <Col md={8}>
                    <h1>Our Florida Brewery List</h1> 
                    <h5><em>Is our list missing something? Help us make our list complete!</em></h5>
                        <p>
                            Beer Buddy Florida is still in its infancy. Your help will enable us to grow! The table below shows the breweries and their beers that we currently
                            currently have indexed. <em>If your favorite is not on the list, click the button below to add it!</em> <strong><em><br/><br/>Thanks for helping Beer Buddy Florida to grow!</em></strong>    
                        </p> 

                        
                        {breweryList.map((res) => (
                        
                        <Row key={res.id}>
                            <CardGroup>
                            <Card border="danger" className="mb-4" style={{ width: '200px '}}>
                                <Card.Header>{res.name}</Card.Header>
                                
                                <Card.Body>
                                    <Row>
                                    <Col md={6}>
                                     <img src={res.logoURL} alt="Brewery Logo" className="listing-logo img-responsive"/>
                                    </Col>

                                    <Col md={6}>
                                        <p className='listing-info'>{res.name}<br/>
                                        {`${res.address1}   ${res.city}, FL ${res.zip}`}<br/>
                                            <a href={res.website} target="_blank">{res.website}</a></p>
                                    </Col>
                                    </Row>
                                </Card.Body>
                               
                                <Card.Footer>
                                    <ButtonGroup>
                                        <UpdateBreweryForm fetchData={fetchData} breweryId={res.id}/>
                                        <Button variant="danger" onClick={() => deleteBrewery(res.id)}>Delete Brewery</Button>
                                    </ButtonGroup>
                                </Card.Footer>

                            </Card>
                            </CardGroup>
                            
                        </Row>
                        ))}   
                    </Col>

                    <Col md={4}>

                            <BreweryLogoScroller className="mb-4"/>
                            <p>The number of craft breweries have been rapidly growing in the United States over the last decade. According to the Brewers Association, in 2022 the number
                                of microbreweries, brewpubs, taproom breweries and regional craft breweries reached an all-time high of <strong>9,552!</strong> <cite className="float-end">Source: 
                                    <a href="https://www.brewersassociation.org/press-releases/brewers-association-releases-annual-craft-brewing-industry-production-report-and-top-50-producing-craft-brewing-companies-for-2022/"
                                        target="_blank">Brewers Association</a></cite>                   
                            </p>

                            <p className='mt-5'>Florida only had 3 Craft breweries in 1989. The surge of Florida Craft Breweries began in the early 90s and has
                            been growing every day since. As of 2022, there were almost 400 operational microbreweries in Florida. Here are the number of breweries by county.
                            </p>

                            <div className="d-grid gap-2">
                                <CountyTable />
                                <NewBreweryForm fetchData={fetchData}/>
                                <BreweryNotes />
                            </div>
                    </Col>
                </Row>  
            </Container>      
        </>
    );
}