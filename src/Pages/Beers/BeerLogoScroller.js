import React, { useState, useEffect } from 'react';
import { Carousel, Tooltip, OverlayTrigger }  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import './beers.css';

//functional component | does not change the state
export default function BeerLogoScroller () {
    
    //Set endpoint for API connection
    const Endpoint = "https://64bedc3b5ee688b6250d0246.mockapi.io/beers";

    //create array to hold logo information and use setState to create an empty arry
    const [logoList, setLogoList] = useState([]);

    //useEffect prepares page for rendering
    useEffect(() => {
      // This will run when the component mounts 
      async function fetchData() {
        try {
          const response = await axios.get(Endpoint);
          setLogoList(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      fetchData();
    }, [Endpoint]);

    //const to hold tooltip information
    const tooltip = (
        <Tooltip className="tooltip">Beer logos are pulled from the BEERS API</Tooltip>
    );

    return (
        <>
        <OverlayTrigger placement="right" overlay={tooltip}>
            <div className="beer-logo-scroll my-auto mx-auto">
                <Carousel controls={false} className='text-center'>
                
                {logoList.map((logo) => (                
                <Carousel.Item interval={5000} key={logo.id}>
                <img
                    className="img-responsive img-fluid"
                    src={logo.imgURL}
                    alt="Beer Logo"
                />
                </Carousel.Item>
                ))}
            </Carousel>
        </div>
        </OverlayTrigger>
        </>
    );
}