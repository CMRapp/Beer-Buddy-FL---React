import React , {setState, useState, useEffect} from "react";
import { Container, Row, Col, Table, Card, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";

import axios from "axios";
import './beers.css';
import CardHeader from "react-bootstrap/esm/CardHeader";
import BeerTable from "./BeerTable";

export default function  BeerDetails({beerId}){
    //get beerId fron parameters
    
    //Store beer info id state
    let [beerInfo, setBeerInfo] = useState({});
    let [breweryName, setBreweryName] = useState('');

    //Get beer info using beerId from URL upon component mounting
    useEffect (() => {
        async function getBeerInfo() {
            const result = await axios.get(`https://64bedc3b5ee688b6250d0246.mockapi.io/beers/${beerId}`);
            setBeerInfo(result.data);
            setBreweryName(result.data.brewery);
        }
        getBeerInfo();
    }, [beerId.id]);


    return (
        <div className="beer-info">
            <Container>
                <Row className="mt-3">
                    <Col md={7}>
                        <Card className="beer-info">
                        <CardHeader>{beerInfo.name}</CardHeader>
                                <Card.Body>
                                    <Row>
                                    <Col md={6}>
                                        <Image src={beerInfo.imgURL}/>
                                    </Col>

                                    <Col md={6}>
                                        <h4>ABV: {beerInfo.abv}&ensp;&ensp;IBU: {beerInfo.ibu}<br/>{beerInfo.style}</h4>
                                        <p><strong>Brewer's Notes:</strong><br/>
                                        {beerInfo.notes}
                                        </p>
                                    </Col>
                                    </Row>
                                    
                                </Card.Body>
                                <Card.Footer>Brewed by {breweryName}</Card.Footer>
                            </Card>
                        </Col>

                    

                    <Col md={5}>
                    <BeerTable breweryName={breweryName}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
