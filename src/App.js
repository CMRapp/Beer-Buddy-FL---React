import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Beers from './Pages/Beers/Beers';
import Breweries from './Pages/Breweries/Breweries';
import Navigation from './Components/Navigation/Navigation';
import Reviews from './Pages/Reviews/Reviews';
import Styles from './Pages/Styles/Styles';
import Footer from './Components/Footer/Footer';




export default function App() {
  return (
    <div>
        
        <Navigation/>
        <Footer/>
        
    </div>
  );
}
