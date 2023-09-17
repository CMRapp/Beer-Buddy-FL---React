import React , {setState, useState, useEffect } from "react";
import { Container, Row, Col, Table, Card, Image, Alert, Button } from "react-bootstrap";
import { useParams,Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faSquareXTwitter, faInstagram, faInstagramSquare   } from '@fortawesome/free-brands-svg-icons'

import axios from "axios";
import './breweries.css';
import CardHeader from "react-bootstrap/esm/CardHeader";
import BeerTable from "../Beers/BeerTable";

export default function  BreweryDetails({breweryName}){

    //get beerId fron parameters
    const key = useParams();

    //Store beer info id state
    let [breweryInfo, setBreweryInfo] = useState({});
    let [gName, setGName] = useState('');
    let [gCity, setGCity] = useState('');

    //Get beer info using beerId from URL upon component mounting
    useEffect (() => {
        async function getBreweryInfo() {
            const result = await axios.get(`https://64bedc3b5ee688b6250d0246.mockapi.io/breweries/${key.key}`);
            setBreweryInfo(result.data);
            setGName(result.data.name);     //set google name to replace string for google url
            setGCity(result.data.city);     //set google city to replace string for google url
        }
        getBreweryInfo();
        
    }, []);

    let urlName = gName.replace(/\s/g, '+');
    let urlCity = gCity.replace(/\s/g, '+')
    let gURL = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAfzQyabkR_TNc6MNQtWeeRVjlab_7zZww&q=${urlName},${urlCity}&zoom=16`
    

    return (
        <div className="beer-info">
            <Container>
                <Row className="mt-3">
                    <Col>
                        <Card className="brewery-info">
                        <CardHeader>About {breweryInfo.name}</CardHeader>
                                <Card.Body>
                                    <Row>
                                    <Col md={3}>
                                        <Image src={breweryInfo.logoURL} className='img-responsive img-fluid logo'/>
                                        
                                        <h6 className='mt-4 text-center'>
                                            {breweryInfo.address1}<br/>
                                            {breweryInfo.city}, FL {breweryInfo.zip}
                                        </h6> 
                                        <p className = 'text-center'><a href={breweryInfo.website} target="_blank" >{breweryInfo.website}</a></p>
                                        <p className='text-center'><a href={breweryInfo.facebook} target="_blank" ><FontAwesomeIcon icon={faFacebook} style={{color:"0165E1", height:"20px"}}/></a>&nbsp;
                                        <a href={breweryInfo.twitter} target="_blank" ><FontAwesomeIcon icon={faSquareXTwitter} style={{color:"black", height:"20px"}}/></a>&nbsp;
                                        <a href={breweryInfo.instagram} target="_blank" ><FontAwesomeIcon icon={faInstagramSquare} style={{color:"833AB4", height:"20px"}}/></a>
                                        </p>
                                       
                                        <iframe
                                            width="300"
                                            height="400"
                                            src={gURL}
                                            >
                                        </iframe>
                                        
                                    </Col>

                                    <Col md={9}>
                                        {breweryInfo.about}
                                        <BeerTable breweryName={breweryInfo.name}/>
                                       
                                    </Col>
                                </Row>
                                </Card.Body>
                                <Card.Footer><br/><br/></Card.Footer>
                            </Card>
                            
                        </Col>
                </Row>
            </Container>
        </div>
    );

    
}
