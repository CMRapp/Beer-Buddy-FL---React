import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function App() {
return (
	<>
        <Carousel fade fluid>
            <Carousel.Item interval={6000} controls={false}>
            <img
                className="img-fluid"
                src="./img/flight1-hd.jpg"
                alt="Craft Beer Flight"
            />
            </Carousel.Item>

            <Carousel.Item interval={6000}>
            <img
                className="img-fluid"
                src="./img/beer-taps.jpg"
                alt="Hops Image"
            />
            </Carousel.Item>

            <Carousel.Item interval={6000}>
            <img
                className="img-fluid"
                src="./img/hopshd.jpg"
                alt="Craft Beer Collage"
            />
            </Carousel.Item>
        </Carousel>
    </>
	
);
}
