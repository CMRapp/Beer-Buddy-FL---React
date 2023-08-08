import React , {useState, setState, useEffect} from "react";
import { Table, Container, Card } from "react-bootstrap";

import axios from "axios";
import './beers.css';

export default function BeerTable({breweryName}) {

    
    //define BREWERIES endpoint
    const Endpoint = "https://64bedc3b5ee688b6250d0246.mockapi.io/beers";

    //create array to hold logo information and use setState to create an empty array
    const [beers, setBeers] = useState([]);


    // API Call -gets list of beers
    async function fetchData() {
        try {
          const beerponse = await axios.get(Endpoint);
          setBeers(beerponse.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

    //useEffect prepabeer page for rendering | Calls fetchData()
    useEffect(() => {
        fetchData();
      }, [Endpoint]);

    return(
        <div>
            <Card>
                <Card.Header>More Beers From {breweryName}</Card.Header>
                <Table>
                <thead>
                    <tr>
                        <th>Logo</th>
                        <th className=''>Beer</th>
                        <th className=''>ABV</th>
                        <th className=''>IBU</th>
                        <th className=''>Style</th>                   
                    </tr>
                </thead>

                <tbody>
                    {beers.map((beer) => (
                        
                        <tr key={beer.id}>
                            <td><img src={beer.imgURL} className='beer-image img-fluid img-responsive'/></td>
                            <td>{beer.name}</td>
                            <td>{beer.abv} %</td>
                            <td>{beer.ibu}</td>
                            <td>{beer.brewery}</td>                            
                        </tr>
                    ))}

                </tbody>
                </Table>
            </Card>
        </div>
    );
}

