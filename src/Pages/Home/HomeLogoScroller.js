import React, { useState, useEffect } from "react";
import { Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import './home.css';
import axios from "axios";

function HomeLogoScroller() {
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

      
      <Container>
        <Row>
            <OverlayTrigger placement="right" overlay={tooltip}>
            <marquee className="home-logo-scroll" behavior="scroll" direction="left">
                {logoList.map((res) => (
                    <img key={res.id} src={res.logoURL}/>
                ))}
            </marquee> 
            </OverlayTrigger>
        </Row>        
      </Container>
      
    );
  }
  export default HomeLogoScroller;