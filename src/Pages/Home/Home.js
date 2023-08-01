import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import HeroSlider from './HeroSlider';
import Alert from 'react-bootstrap/Alert';

import AboutHome from './AboutHome';
import HomeBeerList from './HomeBeerList';
import HomeLogoScroller from './HomeLogoScroller';
import './home.css';

export default class Home extends React.Component {
  render () {
        return (
            <>    
            <HeroSlider />
        
            <Container className="mt-5">
                <Row>
                    <Col md={7}>
                        <Row>
                            <h1><em>Welcome Florida Beer Lovers!</em></h1>
                            <h5><em>If you love craft beers and you love Florida - you're in the right place!</em></h5>
                            <p>
                                Beer Buddy Florida initially started as a project while learning back end software development during <a href="https://promineotech.com/" target="_blank">Promineo Tech</a>'s Back End Software Developer Bootcamp.
                                It is now on its way to becoming a <strong>FULL STACK</strong> development project as I am currently enrolled in the Front End Software Developer Bootcamp.
                            </p>
    
                            <p>
                                The purpose of this website is to provide information of Florida Craft Breweries and their beers. Information that you'll find <strong>(eventually!)</strong> will include:
                            </p>
    
                            <Alert variant='warning'>
                                <ul>
                                    <li>Brewery information, such as Date Established, Location, and Contact Information.</li>
                                    <li>A list of brewer's beers including Pictures, Brewer's Notes, ABV & IBU. </li>
                                    <li>Taster's Reviews (future)</li>
                                    <li>Information on the Styles (Categories) of beer.</li>
                                </ul>
                            </Alert>
    
                            <h3 className="py-3"><em>Pop a top of your favorite brew and dive on in!</em></h3>
    
                            <Image src="./img/beer-on-beach.png" className='page-image' />
                        </Row>
                    </Col>
                    
                    
                    <Col md={5}>
                        <Stack gap={3}>
                            <AboutHome />
                            <HomeBeerList />
                        </Stack>
                    </Col>
                </Row>
            </Container>
            
            <HomeLogoScroller />
            </>
        );
    }
}