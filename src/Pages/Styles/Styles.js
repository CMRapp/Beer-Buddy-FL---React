import React from 'react';
import {Image, Tabs, Tab, Container} from 'react-bootstrap';

export default function Styles () {
   
    return  (
        <Container className="text-center">
            <Image src="./img/beer-styles-hero.jpg" className="my-3 d-block mx-auto img-fluid" />
            <h4>The following information about beer styles is courtesy of the Brewer's Association and is used with permission.</h4>
            <em>"Brewers Association 2023 Beer Style Guidelines <a href="https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/" target="_blank">(https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/)</a> published by the Brewers Association."</em>
            <iframe 
                src="https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
                width="1250px"
                height="1000px"
                title="Brewers Association Beer Style Guidelines"
                allowFullScreen>
            </iframe>
            
        </Container>

        

    );

}