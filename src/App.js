import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';


export default function App() {
  const [results, setResults] = useState([]);

  return (
    <div style={{ 
      backgroundImage: "url(/img/website-bg.jpg)",
      backgroundRepeat: 'no-repeat'}}>
        
        <Navigation setResults={setResults}/>
        {/* <SearchResultsList results={results} /> */}
        <Footer/>
        
    </div>
  );
}
