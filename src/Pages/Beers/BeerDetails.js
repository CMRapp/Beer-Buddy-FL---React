import React , {setState, useState, useEffect} from "react";
import { Container, Row, Col, Alert, Card, Image } from "react-bootstrap";
import { useParams, Route } from "react-router-dom";

import axios from "axios";
import './beers.css';
import CardHeader from "react-bootstrap/esm/CardHeader";
import BeerTable from "./BeerTable";

export default function  BeerDetails(){
    //get beerId fron parameters
    const key = useParams();
    

    //Store beer info id state
    let [beerInfo, setBeerInfo] = useState({});
    let [breweryName, setBreweryName] = useState('');

    //Get beer info using beerId from URL upon component mounting
    useEffect (() => {
        async function getBeerInfo() {
            const result = await axios.get(`https://64bedc3b5ee688b6250d0246.mockapi.io/beers/${key.key}`);
            setBeerInfo(result.data);
            setBreweryName(result.data.brewery);  
        }
        getBeerInfo();
    }, []);


    return (
        <div className="beer-info">
            <Container>
                <Row className="mt-3">
                    <Col md={5}>
                        <Card className="beer-info">
                        <CardHeader>{beerInfo.name}</CardHeader>
                                <Card.Body>
                                    <Row>
                                    <Image src={beerInfo.imgURL} className='img-responsive img-fluid'/>                                   
                                    <h4>ABV: {beerInfo.abv}&ensp;&ensp;IBU: {beerInfo.ibu}&ensp;&ensp; {beerInfo.style}</h4>
                                    <p><strong>Brewer's Notes:</strong><br/>
                                        {beerInfo.notes}
                                    </p>
                                    </Row>
                                    
                                </Card.Body>
                                <Card.Footer>A {beerInfo.type} by {breweryName}</Card.Footer>
                            </Card>
                        </Col>

                    

                    <Col md={7}>
                        <BeerTable breweryName={breweryName}/>
                    </Col>

                        <Alert variant="warning" className="mt-3 b order border-rounded border-danger shadow p-3 mb-5 rounded text-center">
                            <h3>Coming Soon - Reviews Widget</h3>
                        </Alert>
                </Row>
            </Container>
        </div>
    );

    
}
