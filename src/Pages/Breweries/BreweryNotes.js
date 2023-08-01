import React from 'react';
import { Row, Col, Table, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Button } from 'react-bootstrap';

import './breweries.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

//functional component | doess not alter state
export default function BreweryNotes() {
    
     ///modal handling
     const [isOpen, setIsOpen] = React.useState(false);

     const showModal = () => {
       setIsOpen(true);
     };
   
     const hideModal = () => {
       setIsOpen(false);
     };

    return(
        <>
        <Modal show={isOpen} onHide={hideModal} centered size="med">
            <ModalHeader>
                <ModalTitle>About This Page</ModalTitle>
            </ModalHeader>

            <ModalBody>
                <h5>
                    This page is a representation of the BREWERIES Endpoint of the final version of the BeerBuddy API. It has been created using mockapi.io.</h5>
                    <h5>As it is just a mock API, deleting a brewery <strong>will not delete</strong> related beers in the BEER Endpoint page.
                </h5>
            </ModalBody>

            <ModalFooter>
                <Button variant='warning' onClick={hideModal}>Close Window</Button> 
            </ModalFooter>
        </Modal>
        <Button variant="primary" onClick={showModal}>About This Page <FontAwesomeIcon icon={faCircleInfo}/></Button>    
        </>
    );
}