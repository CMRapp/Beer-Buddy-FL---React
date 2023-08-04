import React, {useState, useEffect} from 'react';
import { Form, Modal, ModalBody, 
    ModalFooter, ModalHeader, ModalTitle, Button } from 'react-bootstrap';
import axios from 'axios';

import './beers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'


//UpdateBeerForm is a functional (stateless) component | recieves props
export function UpdateBeerForm ({beerId, fetchData}) {
    
    //Define endpoint URL to include selected brewery id
    const Endpoint = `https://64bedc3b5ee688b6250d0246.mockapi.io/beers/${beerId}`;

    const [name, setName] = useState(''); 
    const [brewery, setBrewery] = useState('');
    const [abv, setAbv] = useState('');
    const [ibu, setIbu] = useState('');
    const [style, setStyle] = useState('');
    const [logoURL, setLogoURL] = useState('');
    const [reviews, setReviews] = useState([]);             //currently not used
    const [dateAdded, setDateAdded] = useState(new Date()); //currently not used

    
    //useEffect prepares page for rendering | Calls fetchData()
    useEffect(() => {
        fetchData();
      }, [Endpoint]);
    
    ///modal handling
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };
    
    //function to update beer
    async function updateBeer () {
        //validate inputs are not blank
        if (name && brewery && abv && ibu && style && logoURL ) {             
            //if valid input, try adding brewery
            try {
                const newBeer = {name, brewery, abv, ibu, style, logoURL};
                const resp = await axios.put(Endpoint, newBeer);
            } catch (error) {
                console.log("Error updating Beer! ", error);
            }
            setName('');                                //reset form inputs for good UX
            setBrewery('');
            setAbv('');
            setIbu('');
            setStyle('');
            setLogoURL('');
            hideModal();                                //close the modal
            fetchData();                                //refresh the data
                
        //if fields are empty, log error
        } else {
            console.log('All fields must be completed');
        };        
    }

   return (
    <>
        <Modal
            show={isOpen}
            onHide={hideModal}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description' 
            centered
        >
            <ModalHeader>
                <ModalTitle>UPDATE THIS BEER</ModalTitle>
            </ModalHeader>
            
            <ModalBody>
                <p>Thanks for taking the time to add a new Florida Beer to our database! Please use the form below to enter your information.</p>
                <Form>
                    <Form.Control 
                        type='text'
                        name = 'name'
                        placeholder = 'Beer Name'
                        value={name}                        
                        onChange={(e) => setName(e.target.value)}                        
                    />
                    
                    <Form.Control 
                        type='text'
                        name='brewery'
                        placeholder = 'Enter Brewery Name'
                        onChange={(e) => setBrewery(e.target.value)}
                        value={brewery}
                    />

                    <Form.Control 
                        type='text'
                        name='abv'
                        placeholder = 'Enter ABV without percent sign'
                        onChange={(e) => setAbv(e.target.value)}
                        value={abv}
                    />

                    <Form.Control 
                        type='text'
                        name='ibu'
                        placeholder = 'Enter IBU'
                        onChange={(e) => setIbu(e.target.value)}
                        value={ibu}
                    />

                    <Form.Control  
                        type='text'
                        name='style'
                        placeholder = 'Enter Beer Style (American Pilsner, Lager, IPA, etc)'
                        onChange={(e) => setStyle(e.target.value)}
                        value={style}
                    />

                    <Form.Control  
                        type='text'
                        name='style'
                        placeholder = 'Enter Beer Logo URL'
                        onChange={(e) => setLogoURL(e.target.value)}
                        value={logoURL}
                    />
                
                </Form>
            </ModalBody>
            
            <ModalFooter>
                <Button variant='warning' onClick={updateBeer}>Update This Beer <FontAwesomeIcon icon={faArrowsRotate}/></Button>  
                <Button variant='secondary' onClick={hideModal}>Cancel</Button>    
            </ModalFooter>
        </Modal>
        <Button variant='warning' onClick={showModal} size="sm"><FontAwesomeIcon icon={faArrowsRotate}/></Button>   
    </>
   );
}