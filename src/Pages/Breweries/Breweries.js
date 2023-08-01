import React,  { useState, useEffect} from "react";
import {Container, Row, Col, Image, Alert, Stack} from 'react-bootstrap';
import BreweryLogoScroller from './BreweryLogoScroller';
import CountyTable from "./CountyTable";
import BreweryNotes from "./BreweryNotes";
import { NewBreweryForm } from "./NewBreweryForm";
import BreweryCard from "./BreweryCard";

import axios from "axios";
import './breweries.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeerMugEmpty, faTrashCan } from '@fortawesome/free-solid-svg-icons'

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
            <Container>
                <Image src="./img/brewery-list-hero.jpg" className="my-3 d-block mx-auto img-fluid" />
                <Row className="text-center">
                    <Col md={10}>
                    <p>The number of craft breweries have been rapidly growing in the United States over the last decade. According to the Brewers Association, in 2022 the number
                        of microbreweries, brewpubs, taproom breweries and regional craft breweries reached an all-time high of <strong>9,552!</strong> <cite className="float-end">Source: 
                            <a href="https://www.brewersassociation.org/press-releases/brewers-association-releases-annual-craft-brewing-industry-production-report-and-top-50-producing-craft-brewing-companies-for-2022/"
                                target="_blank">Brewers Association</a></cite>                   
                    </p>

                    <p className='mt-2'>Florida only had 3 Craft breweries in 1989. The surge of Florida Craft Breweries began in the early 90s and has
                        been growing every day since. As of 2022, there were almost 400 operational microbreweries in Florida. Here are the number of breweries by county.
                    </p>
                        
                        {breweryList.map((brewery) => (
                        
                        <Row key={brewery.id} className="d-inline-flex justify-content-center">
                            <BreweryCard brewery={brewery} fetchData={fetchData} deleteBrewery={deleteBrewery}/>                            
                        </Row>
                        ))}   
                    </Col>

                    <Col md={2}>
                        <BreweryLogoScroller className="mb-4"/>
                        <Stack gap={1}>
                            <Alert variant="warning" className="shadow p-3 rounded mt-2">
                                <h5><em>Is our list missing something?<br/>Help us make our list complete!</em></h5>
                                <p><em>If your favorite is not on the list, click the <strong>Add A Beer <FontAwesomeIcon icon={faBeerMugEmpty}/></strong><br/>button to add it!</em></p>
                            </Alert>
                            <CountyTable />
                            <NewBreweryForm fetchData={fetchData}/>
                            <BreweryNotes />
                        </Stack>
                    </Col>
                </Row>  
        </Container>     
    );
}