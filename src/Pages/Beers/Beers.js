import React,  { useState, useEffect} from "react";
import {Container, Row, Col, Image, Table, Tooltip, Button, ButtonGroup } from 'react-bootstrap';
import BeerNotes from "./BeerNotes";
import { NewBeerForm } from "./NewBeerForm";
import { UpdateBeerForm } from "./UpdateBeerForm";

import './beers.css';

import axios from "axios";

//functional component 
export default function Beers() {

    //define BREWERIES endpoint
    const Endpoint = "https://64bedc3b5ee688b6250d0246.mockapi.io/beers";

    //create array to hold logo information and use setState to create an empty array
    const [beerList, setBeerList] = useState([]);


    // API Call -gets list of beers
    async function fetchData() {
        try {
          const response = await axios.get(Endpoint);
          setBeerList(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

    //useEffect prepares page for rendering | Calls fetchData()
    useEffect(() => {
        fetchData();
      }, [Endpoint]);

      //async function to delete a brewery
    async function deleteBeer(beerId) {
        try {
            const resp = await axios.delete(`${Endpoint}/${beerId}`);

            //update state to reflect deleted brewery using filter
            setBeerList((beerList) =>
                beerList.filter((brewery) => brewery.id !== beerId)
            );

        } catch (error) {
            console.log("Error Deleting Brewery! ", error);
        }
    };
    

    return (
        <>
            <Image src="./img/craft-beers.png" className="my-3 d-block mx-auto img-fluid" />

            <Container>
                <Row className="text-center">
                    <Col md={8}>
                    <h1>Our Florida Beer List</h1> 
                    <h5><em>Is our list missing something? Help us make our list complete!</em></h5>
                        <p>
                            Beer Buddy Florida is still in its infancy. Your help will enable us to grow! The table below shows the breweries and their beers that we currently
                            currently have indexed. <em>If your favorite is not on the list, click the button below to add it!</em> <strong><em><br/><br/>Thanks for helping Beer Buddy Florida to grow!</em></strong>    
                        </p> 

                                                
                        <Table striped bordered hover variant="warning" className='w-100'>
                            <thead>
                                <tr>
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
                                {beerList.map((res) => (
                                    <tr key={res.id}>
                                        <td>{res.name}</td>
                                        <td>{res.abv} %</td>
                                        <td>{res.ibu}</td>
                                        <td>{res.style}</td>
                                        <td>{res.brewery}</td> 
                                        <td><UpdateBeerForm fetchData={fetchData} breweryId={res.id}/></td>
                                        <td><Button variant="danger" onClick={() => deleteBeer(res.id)}>Delete Beer</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>

                    <Col md={4}>
                        <div className="d-grid gap-2">
                            <NewBeerForm fetchData={fetchData}/>
                            <BeerNotes />
                        </div>
                    </Col>
                </Row>  
            </Container>      
        </>
    );
}