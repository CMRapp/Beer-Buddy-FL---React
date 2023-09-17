import React , {useState, setState, useEffect} from "react";
import { Table, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import './beers.css';

import BeerDetails from './BeerDetails';

export default function BeerTable({breweryName}) {
    
    //define  beerendpoint
    const BeerEndpoint = "https://64bedc3b5ee688b6250d0246.mockapi.io/beers";
    const BreweryEndpoint = "https://64bedc3b5ee688b6250d0246.mockapi.io/breweries";

    //create array to hold logo information and use setState to create an empty array
    const [beers, setBeers] = useState([]);
    const [breweries, setBreweries] = useState([]);

    // API Call -gets list of beers
    async function fetchData() {
        try {
          const beerresponse = await axios.get(BeerEndpoint);
          const breweryresponse = await axios.get(BreweryEndpoint);
          setBeers(beerresponse.data);
          setBreweries(breweryresponse.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    
    //filter beers to match breweryName
    let filteredBreweries = beers.filter(function(beer) {
        return beer.brewery === breweryName;});

    //filter breweries to match breweryName
    let filteredBreweries2 = breweries.filter(function(brewery) {
        return brewery.name === breweryName;});

   
    //useEffect prepabeer page for rendering | Calls fetchData()
    useEffect(() => {
        fetchData();
      }, []);

      function refreshPage() {
        window.location.reload(false);
      }

    return(
        <div>
            
            <Card className="mt-2">
                <Card.Header>Beers From <span className='beer-listing-header'>{breweryName}</span></Card.Header>
                <Table>
                <thead>
                    <tr>
                        <th></th>
                        <th className=''>Beer Name</th>
                        <th className=''>ABV</th>
                        <th className=''>IBU</th>
                        <th className=''>Style</th>  
                        <th> </th>                 
                    </tr>
                </thead>

                <tbody>
                    {filteredBreweries.map((beer) => (
                        <>
                            <tr key={beer.id}>
                                <td><img src={beer.imgURL} className='beer-image img-fluid img-responsive'/></td>
                                <td>{beer.name}</td>
                                <td>{beer.abv} %</td>
                                <td>{beer.ibu}</td>
                                <td>{beer.style}</td> 
                                <td><Link reloadDocument to={`/beer-details/${beer.id}`} element={<BeerDetails />}  className='btn btn-danger'>View</Link></td>                           
                            </tr>
                        </>
                    ))}
                </tbody>
                </Table>
                <Card.Footer className='text-center'>
                    {filteredBreweries2.map((brewery) => (
                       <Link to={`/brewery-details/${brewery.id}`} className="btn btn-warning" id='breweryButton'>Go To {breweryName} Page</Link>
                    ))}
                </Card.Footer>
            </Card>
        </div>
    );
}

