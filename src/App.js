import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { SearchResultsList } from './Components/Search/SearchResultsList';


export default function App() {
  const [results, setResults] = useState([]);

  return (
    <div style={{ 
      backgroundImage: "url(/img/website-bg.jpg)",
      backgroundRepeat: 'no-repeat'}}>
        
        <Navigation setResults={setResults}/>
        <SearchResultsList results={results} />
        <Footer/>
        
    </div>
  );
}
