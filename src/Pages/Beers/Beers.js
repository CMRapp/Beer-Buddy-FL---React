import React,  { useState, useEffect} from "react";
import {Container, Row, Col, Image, Table, Alert, Nav, Stack } from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom';
import BeerNotes from "./BeerNotes";
import { NewBeerForm } from "./NewBeerForm";
import { UpdateBeerForm } from "./UpdateBeerForm";
import BeerLogoScroller from "./BeerLogoScroller";

import axios from "axios";
import _ from "lodash";

import './beers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeerMugEmpty, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import BeerDetails from "./BeerDetails";

//functional component 
export default function Beers() {

    //variable for class name of sorted table heads
    let cl = "default";

    //variables foir pagination
    const pageSize = 15;

    //define BREWERIES endpoint to use with axios
    const Endpoint = "https://64bedc3b5ee688b6250d0246.mockapi.io/beers";

    //create array to hold logo information and use setState to create an empty array
    const [beers, setBeers] = useState([]);
    const [order, setOrder] = useState("ASC");
    const [paginatedBeers, setPaginatedBeers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagDirection, setPagDirection] = useState("default")

    //sorting function for table
    const sorting =(col)=> {
        if (order === "ASC"){
            const sorted = [...paginatedBeers].sort((a,b) =>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setPaginatedBeers(sorted);
            setOrder("DSC") ;
            //setPagDirection("up");
        }

        if (order === "DSC"){
            const sorted = [...paginatedBeers].sort((a,b) =>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setPaginatedBeers(sorted);
            setOrder("ASC") ;
            //setPagDirection("down");
        }
    }

    // API Call -gets list of beers
    async function fetchData() {
        try {
          const beerponse = await axios.get(Endpoint);
          setBeers(beerponse.data);
          setPaginatedBeers(_(beerponse.data).slice(0).take(pageSize).value());
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

    //useEffect prep beer page for rendering | Calls fetchData()
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
    
    //more pagination variables (uses loDash)
    const pageCount = beers ? Math.ceil(beers.length/pageSize) :0;
    if (pageCount === 1) return null;

    const pages = _.range(1, pageCount + 1);

    //pagination function
    const pagination=(pageNo) => {
        setCurrentPage(pageNo);
        const startIndex = (pageNo -1)*pageSize;
        const paginatedBeer = _(beers).slice(startIndex).take(pageSize).value();
        setPaginatedBeers(paginatedBeer);
    }

    return (
        <Container>
            <Image src="./img/beer-list-hero.jpg" className="my-3 d-block mx-auto img-fluid" />

            <Container>
                <Row className="text-center">
                    <Col md={9}>
                    
                        <small><strong>Click the column heads to sort the data</strong></small>                        
                        <Table striped bordered hover variant="warning" className='w-100 beer-table'>
                            <thead>
                                <tr>
                                    <th>Logo</th>                                  
                                    <th onClick={() => sorting("name")} className=''>Beer</th>
                                    <th onClick={() => sorting("abv")} className=''>ABV</th>
                                    <th onClick={() => sorting("ibu")} className=''>IBU&nbsp;&nbsp;</th>
                                    <th onClick={() => sorting("style")} className=''>Style</th>
                                    <th onClick={() => sorting("brewery")} className=''>Brewery</th>
                                    <th className=''>Info</th>
                                    
                                </tr>
                            </thead>
                            
                            
                            <tbody>
                                {paginatedBeers.map((beer) => (
                                    <tr key={beer.id}>
                                        <td><img src={beer.imgURL} className='beer-image img-fluid img-responsive'/></td>
                                        <td>{beer.name}</td>
                                        <td>{beer.abv} %</td>
                                        <td>{beer.ibu}</td>
                                        <td>{beer.style}</td>
                                        <td>{beer.brewery}</td> 
                                        <td><Link to={`/beer-details/${beer.id}`} element={<BeerDetails/>} className='btn btn-danger btn-sm' >View</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <Nav className="d-flex justify-content-center">
                            <ul className="pagination">
                                {
                                    pages.map((page) => (
                                        <li 
                                            className= {
                                                page === currentPage ? "page-item-active":"page-item"
                                            }>
                                                <p className="page-link"
                                                onClick={()=>pagination(page)}>{page}</p>
                                            </li>
                                    ))
                                }
                                
                            </ul>
                        </Nav>
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