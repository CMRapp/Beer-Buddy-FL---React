import React, { useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import pages components
import Home from './Pages/Home/Home'
import Beers from './Pages/Beers/Beers';
import Breweries from './Pages/Breweries/Breweries';
import Reviews from './Pages/Reviews/Reviews';
import Styles from './Pages/Styles/Styles';
import NotFound from './Pages/NotFound/NotFound';
import BeerDetails from './Pages/Beers/BeerDetails';
import BreweryDetails from './Pages/Breweries/BreweryDetails';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';


export default function App() {
  const [results, setResults] = useState([]);

  return (
    <div style={{ 
      backgroundImage: "url(/img/website-bg.jpg)",
      backgroundRepeat: 'no-repeat'}}>
        
        {/* Display Navigation component */ }
        <Navigation setResults={setResults}/>
        {/* <SearchResultsList results={results} /> */}

        <Routes>
          <Route exact path="/" activeClassName="active"  element={<Home />}/>
          <Route path="/beers" activeClassName="active" element={<Beers />}/>
          <Route path="/breweries" activeClassName="active" element={<Breweries />}/>
          <Route path="/styles" activeClassName="active" element={<Styles />}/>
          <Route path="/reviews" activeClassName="active" element={<Reviews />}/>
          <Route path="/beer-details/:key" activeClassName="active" element={<BeerDetails />}/>
          <Route path="/brewery-details/:key" activeClassName="active" element={<BreweryDetails />}/>
          <Route  path="*" element={<NotFound />}/>
        </Routes>

        {/* Display footer component */ }
        <Footer/>
        
    </div>
  );
}
