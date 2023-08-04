import React from "react";
import './SearchResults.css';

export const SearchResult = ({result}) => {
    return (
        <div 
        className='search-results'
         onClick={(e) => alert(`
         ${result.name}
         ABV:${result.abv} %
         IBU:${result.ibu}
         Brewery: ${result.brewery}
         `)}
        >
        {result.name}
        </div>
    );
}