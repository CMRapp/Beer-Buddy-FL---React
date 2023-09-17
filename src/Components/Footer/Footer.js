import React from 'react';
import Container from 'react-bootstrap/Container';
import './footer.css';

export default class Footer extends React.Component{
    render() {
        return (
            <Container fluid className='footer pt-2' >
                <Container>
                    <p>&copy; 2023&nbsp;&nbsp;Christian M Rapp | <a href='https://www.cmrwebstudio.com' target='_blank' rel='noreferrer' className='text-decoration-none'>CMR Web Studio</a>
                    <img className='footer-logo'  src='/img/cmr_patriotic_logo_65.png' alt='CMR Web Studio Logo'/></p>   
                </Container>            
            </Container>
        );
    }
}