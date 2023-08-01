import React from "react";
import {Card} from "react-bootstrap";
import './home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

export default function AboutHome () {
    return (
        <>
            <Card>
                <Card.Header> <FontAwesomeIcon icon={faCircleInfo}/>&nbsp;&nbsp;About this website</Card.Header>
                <Card.Text className="mx-2 mt-2">
                
                    <h5>This website is a developmental testing website for the Beer Buddy FL API which is currently in development. </h5>
                    <h5>All API Endpoints(currently /beers and /breweries) are <strong>mock emdpoints and are not connected to an acutal database.</strong></h5>
                      <h5>Deleting a beer or brewery on this site will not delete the data from the related endpoint.</h5>
                </Card.Text>
                <Card.Footer></Card.Footer>
            </Card>
        </>
    );
}