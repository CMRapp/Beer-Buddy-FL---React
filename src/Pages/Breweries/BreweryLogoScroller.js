import React, { useState, useEffect } from 'react';
import { Carousel, Tooltip, OverlayTrigger }  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

//functional component | does not change the state
export default function BreweryLogoScroller () {
    
    //Set endpoint for API connection
    const Endpoint = "https://64bedc3b5ee688b6250d0246.mockapi.io/breweries";

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
        <Tooltip className="tooltip">Beer logos are pulled from the BREWERIES API</Tooltip>
    );

    return (
        <>
        <OverlayTrigger placement="right" overlay={tooltip}>
            <div className="brewery-logo-scroll">
                <Carousel fade controls={false} className='text-center'>
                
                {logoList.map((res) => (                
                <Carousel.Item interval={5000} key={res.id}>
                <img
                    className="img-responsive img-fluid d-block mx-auto my-auto"
                    src={res.logoURL}
                    alt="Brewery Logo"
                />
                </Carousel.Item>
                ))}
            </Carousel>
        </div>
        </OverlayTrigger>
        </>
    );
}