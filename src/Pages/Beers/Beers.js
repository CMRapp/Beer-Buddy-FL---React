import React,  { useState, useEffect} from "react";
import {Container, Row, Col, Image, Table, Alert, Button, Stack } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import BeerNotes from "./BeerNotes";
import { NewBeerForm } from "./NewBeerForm";
import { UpdateBeerForm } from "./UpdateBeerForm";
import BeerLogoScroller from "./BeerLogoScroller";

import axios from "axios";

import './beers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeerMugEmpty, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import BeerDetails from "./BeerDetails";

//functional component 
export default function Beers() {

    //define BREWERIES endpoint to use with axios
    const Endpoint = "https://64bedc3b5ee688b6250d0246.mockapi.io/beers";

    //create array to hold logo information and use setState to create an empty array
    const [beers, setBeers] = useState([]);


    // API Call -gets list of beers
    async function fetchData() {
        try {
          const beerponse = await axios.get(Endpoint);
          setBeers(beerponse.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

    //useEffect prepabeer page for rendering | Calls fetchData()
    useEffect(() => {
        fetchData();
      }, [Endpoint]);

      //async function to delete a brewery
    async function deleteBeer(beerId) {
        try {
            const beerp = await axios.delete(`${Endpoint}/${beerId}`);

            //update state to reflect deleted brewery using filter
            setBeers((beers) =>
                beers.filter((brewery) => brewery.id !== beerId)
            );

        } catch (error) {
            console.log("Error Deleting Brewery! ", error);
        }
    };
    

    return (
        <Container>
            <Image src="./img/beer-list-hero.jpg" className="my-3 d-block mx-auto img-fluid" />

            <Container>
                <Row className="text-center">
                    <Col md={9}>
                    
                                                
                        <Table striped bordered hover variant="warning" className='w-100'>
                            <thead>
                                <tr>
                                    <th>Logo</th>
                                    <th className=''>Beer</th>
                                    <th className=''>ABV</th>
                                    <th className=''>IBU</th>
                                    <th className=''>Style</th>
                                    <th className=''>Brewery</th>
                                    <th className=''>Update</th>
                                    <th className=''>Delete</th>
                                    
                                </tr>
                            </thead>
                            
                            
                            <tbody>
                                {beers.map((beer) => (
                                    <tr key={beer.id}>
                                        <Link to={`/beer-details/${beer.id}`} element={<BeerDetails/>}>
                                            <td><img src={beer.imgURL} className='beer-image img-fluid img-responsive'/></td>
                                        </Link>
                                        
                                        <td>{beer.name}</td>
                                        <td>{beer.abv} %</td>
                                        <td>{beer.ibu}</td>
                                        <td>{beer.style}</td>
                                        <td>{beer.brewery}</td> 
                                        <td><UpdateBeerForm fetchData={fetchData} beerId={beer.id}/></td>
                                        <td><Button variant="danger" onClick={() => deleteBeer(beer.id)} size="sm"><FontAwesomeIcon icon={faTrashCan}/></Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>

                    <Col md={3}>
                        <Stack gap={1}>
                            <BeerLogoScroller />
                            <p className="mt-2">
                                The ultimate goal of Beer Buddy Florida is to become a comprehensive guide to Florida Craft Beers and their Breweries. Beer Buddy Florida is still in its infancy. 
                                On this page, you will find information on Florida Craft Beers that we currently have indexed in our database. As you can see, the listing is quite limited at the moment.     
                            </p>
                            <Alert variant="warning" className="shadow p-3 rounded mt-2">
                                <h5><em>Is our list missing something?<br/>Help us make our list complete!</em></h5>
                                <p><em>If your favorite is not on the list,<br/>click the <strong>Add A Beer <FontAwesomeIcon icon={faBeerMugEmpty}/></strong><br/>button to add it!</em></p>
                            </Alert>
                            <NewBeerForm fetchData={fetchData}/>
                            <BeerNotes />
                        </Stack>
                    </Col>
                </Row>  
            </Container>      
            </Container>
    );
}