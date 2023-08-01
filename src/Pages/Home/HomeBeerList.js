
import React, { useState, useEffect, updateState } from "react";
import { Container, OverlayTrigger, Card, Tooltip, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

//Set endpoint for API connection

function HomeBeerList () {
    const Endpoint = "https://64bedc3b5ee688b6250d0246.mockapi.io/beers";
    

    //create array to hold logo information and use setState to create an empty arry
    const [beerList, setBeerList] = useState([]);

    //useEffect prepares page for rendering
    useEffect(() => {
      // This will run when the component mounts 
      async function fetchData() {
        try {
          const response = await axios.get(Endpoint);
          setBeerList(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      fetchData();
    }, [Endpoint]);

    //const to hold tooltip information
    const tooltip = (
        <Tooltip className="tooltip">Beers are pulled from the BEERS API</Tooltip>
    );

    //function to display most recently added beers. If beerList.length > 10, iterate backwards through array to display info
    //else iterate from beginning
    function displayRecentBeers () {
      let recentBeers = [];
      if (beerList.length >= 10 ) {
        recentBeers = beerList.slice(-10);
        return recentBeers;
      } else {
        return beerList;
      }

      
    }//end function

    return (
        <div className="text-center">
        <Card>
          <Card.Header>Recently Added Beers</Card.Header>
          <OverlayTrigger placement="top" overlay={tooltip}>          
        <Table striped bordered hover variant="warning" className='w-100'>
            
            <tbody>
                
                  {displayRecentBeers().map((res) => (
                    <tr key={res.id}>
                        <td><img src={res.imgURL} className="small-listing img-fluid img-responsive"/></td>
                        <td>{res.name}</td>
                        <td>{res.brewery}</td>                    
                    </tr>
                ))}
            </tbody>
        </Table>
        </OverlayTrigger>
          <Card.Footer><Link to="/beers" className="btn btn-warning">See The Complete List</Link></Card.Footer>
        </Card>
    </div>
  );
}
export default HomeBeerList;