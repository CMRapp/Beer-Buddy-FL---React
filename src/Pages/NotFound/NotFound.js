import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <Container>
            <Link to="/beers"><Image fluid src="./img/not-found.png"  className='mt-3'/></Link>               
        </Container>
    );
}