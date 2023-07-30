
import React, { useState, useEffect, updateState } from "react";
import { Container, OverlayTrigger, Row, Tooltip, Table } from "react-bootstrap";
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

    return (
        <>
        <h4 className='my-3'><em>Recently Added Beers</em></h4>
        <OverlayTrigger placement="top" overlay={tooltip}>
        <Table striped bordered hover variant="warning" className='w-100'>
            <thead>
                <tr>
                    <th className=''>Beer</th>
                    <th className='w-33'>Style</th>
                    <th className=''>Brewery</th>
                    
                </tr>
            </thead>
            
            
            <tbody>
                  {beerList.map((res) => (
                    <tr key={res.id}>
                        <td>{res.name}</td>
                        <td>{res.style}</td>
                        <td>{res.brewery}</td>                    
                    </tr>
                ))}
            </tbody>
        </Table>
        </OverlayTrigger>

        
    

        
    </>
  );
}
export default HomeBeerList;