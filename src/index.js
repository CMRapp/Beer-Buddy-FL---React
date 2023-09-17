/* Beer Beddy Florida
   Author: Christian M Rapp | CMR Web Studio
   (c) 2023 Christian M Rapp
-------------------------------------------*/

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import './Index.css';

ReactDOM.render (
   <React.StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </React.StrictMode>
  ,document.getElementById('root')
);


