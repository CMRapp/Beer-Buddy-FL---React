import React from 'react';
import { Row, Col, Table, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Button } from 'react-bootstrap';

import './breweries.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable } from '@fortawesome/free-solid-svg-icons'

//functional component | doess not alter state
export default function CountyTable() {
    
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
        <Modal show={isOpen} onHide={hideModal} centered>
            <ModalHeader>
                <ModalTitle>Florida Breweries by County</ModalTitle>
            </ModalHeader>

            <ModalBody>
                <Row>
                    <Col md={6}>
                            <Table variant="warning">
                                <thead>
                                <tr>
                                    <th>County</th>
                                    <th className="border border-1 border-start-0">Breweries</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr className="table-light">
                                    <td>Alachua</td>
                                    <td className="border border-1 border-start-0">3</td>
                                </tr>

                                <tr>
                                    <td>Bay</td>
                                    <td className="border border-1 border-start-0">1</td>
                                </tr>

                                <tr className="table-light">
                                    <td>Brevard</td>
                                    <td className="border border-1 border-start-0">7</td>
                                </tr>

                                <tr>
                                    <td>Broward</td>
                                    <td className="border border-1 border-start-0">7</td>
                                </tr>

                                <tr className="table-light">
                                    <td>Charlotte</td>
                                    <td className="border border-1 border-start-0">1</td>
                                </tr>

                                <tr>
                                    <td>Citrus</td>
                                    <td className="border border-1 border-start-0">1</td>
                                </tr>

                                <tr className="table-light">
                                    <td>Clay</td>
                                    <td className="border border-1 border-start-0">1</td>
                                </tr>

                                <tr>
                                    <td>Collier</td>
                                    <td className="border border-1 border-start-0">3</td>
                                </tr>

                                <tr className="table-light">
                                    <td>Duval</td>
                                    <td className="border border-1 border-start-0">15</td>
                                </tr>

                                <tr>
                                    <td>Escambia</td>
                                    <td className="border border-1 border-start-0">3</td>
                                </tr>

                                <tr className="table-light">
                                    <td>Hillsborough</td>
                                    <td className="border border-1 border-start-0">13</td>
                                </tr>

                                <tr>
                                    <td>Indian River</td>
                                    <td className="border border-1 border-start-0">4</td>
                                </tr>

                                <tr className="table-light">
                                    <td>Lake</td>
                                    <td className="border border-1 border-start-0">2</td>
                                </tr>

                                <tr>
                                    <td>Lee</td>
                                    <td className="border border-1 border-start-0">4</td>
                                </tr>

                                <tr className="table-light">
                                    <td>Leon</td>
                                    <td className="border border-1 border-start-0">7</td>
                                </tr>

                                <tr>
                                    <td>Manatee</td>
                                    <td className="border border-1 border-start-0">2</td>
                                </tr>
                                <tr className="table-light">
                                    <td>Marion</td>
                                    <td className="border border-1 border-start-0">1</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>

                        <Col md={6}>
                            <Table variant="warning">
                                <thead>
                                    <tr>
                                        <th>County</th>
                                        <th className="border border-1 border-start-0">Breweries</th>
                                    </tr>
                                </thead>
                                    
                                <tbody>
                                <tr className="table-light">
                                    <td>Miami-Dade</td>
                                    <td className="border border-1 border-start-0">8</td>
                                </tr>

                                <tr>
                                    <td>Monroe</td>
                                    <td className="border border-1 border-start-0">5</td>
                                </tr>

                                <tr className="table-light">
                                    <td>Nassau</td>
                                    <td className="border border-1 border-start-0">1</td>
                                </tr>

                                <tr>
                                    <td>Okaloosa</td>
                                    <td className="border border-1 border-start-0">2</td>
                                </tr>

                                <tr className="table-light">
                                    <td>Orange</td>
                                    <td className="border border-1 border-start-0">9</td>
                                </tr>

                                <tr>
                                    <td>Osecola</td>
                                    <td className="border border-1 border-start-0">1</td>
                                </tr>

                                <tr className="table-light">
                                    <td>Palm Beach</td>
                                    <td className="border border-1 border-start-0">9</td>
                                </tr>

                                <tr>
                                    <td>Pasco</td>
                                    <td className="border border-1 border-start-0">3</td>
                                </tr>

                                <tr className="table-light">
                                    <td>Pinellas</td>
                                    <td className="border border-1 border-start-0">19</td>
                                </tr>

                                <tr>
                                    <td>Polk</td>
                                    <td className="border border-1 border-start-0">2</td>
                                </tr>

                                <tr className="table-light">
                                    <td>Santa Rosa</td>
                                    <td className="border border-1 border-start-0">1</td>
                                </tr>

                                <tr>
                                    <td>Sarasota</td>
                                    <td className="border border-1 border-start-0">4</td>
                                </tr>

                                <tr className="table-light">
                                    <td>Seminole</td>
                                    <td className="border border-1 border-start-0">1</td>
                            </tr>

                            <tr>
                                <td>St Johns</td>
                                <td className="border border-1 border-start-0">2</td>
                            </tr>

                            <tr className="table-light">
                                <td>St Lucie</td>
                                <td className="border border-1 border-start-0">1</td>
                            </tr>

                            <tr>
                                <td>Volusia</td>
                                <td className="border border-1 border-start-0">5</td>
                            </tr>
                            <tr className="table-light">
                                <td>Walton</td>
                                <td className="border border-1 border-start-0">1</td>
                            </tr>
                            </tbody>
                        </Table>                                    
                    </Col>
                    <cite>Source: <a href="https://en.wikipedia.org/wiki/List_of_breweries_in_Florida" target="_blank">Wikipedia</a></cite>
                </Row>
                </ModalBody>

                <ModalFooter>
                    <Button variant='warning' onClick={hideModal}>Close Window</Button> 
                </ModalFooter>
        </Modal>
        <Button variant="warning" onClick={showModal}>View Breweries by County Chart <FontAwesomeIcon icon={faTable}/></Button>    
        </>
    );
}