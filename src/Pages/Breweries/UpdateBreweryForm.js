import React, {useState, useEffect} from 'react';
import { Form, Modal, ModalBody, 
    ModalFooter, ModalHeader, ModalTitle, Button } from 'react-bootstrap';
import axios from 'axios';
import './breweries.css';

//NewBeerForm is a functional (stateless) component | recieves props
export function UpdateBreweryForm ({breweryId, fetchData}) {
    
    //Define endpoint URL to include selected brewery id
    const Endpoint = `https://64bedc3b5ee688b6250d0246.mockapi.io/breweries/${breweryId}`;

    const [name, setName] = useState(''); 
    const [logoURL, setLogoURL] = useState('');
    const [website, setWebsite] = useState('');
    const [address1, setAddress1] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [dateAdded, setDateAdded] = useState(new Date()); //currently not used
    
    ///modal handling
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };
    
    //function to update brewery
    async function updateBrewery () {

        //validate inputs are not blank
        if (name && logoURL && website && address1 && city && zip ) {             
            //if valid input, try adding brewery
            try {
                const newBrewery = {name, logoURL, website, address1, city, zip};
                const resp = await axios.put(Endpoint, newBrewery);
            } catch (error) {
                console.log("Error updating Brewery! ", error);
            }
                hideModal();                                    //close the modal
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
                <ModalTitle>UPDATE BREWERY</ModalTitle>
            </ModalHeader>
            
            <ModalBody>
                <p>Thanks for taking the time to add a new Florida Brewery to our database! Please use the form below to enter your information.</p>
                <Form>
                    <Form.Control 
                        type='text'
                        name = 'name'
                        placeholder = 'Brewery Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}                        
                    />
                    
                    <Form.Control 
                        type='text'
                        name='logo'
                        placeholder = 'Enter Logo URL'
                        onChange={(e) => setLogoURL(e.target.value)}
                        value={logoURL}
                    />

                    <Form.Control 
                        type='text'
                        name='website'
                        placeholder = 'Website'
                        onChange={(e) => setWebsite(e.target.value)}
                        value={website}
                    />

                    <Form.Control 
                        type='text'
                        name='address'
                        placeholder = 'Street Address (Include suite number, if applicable)'
                        onChange={(e) => setAddress1(e.target.value)}
                        value={address1}
                    />

                    <Form.Control  
                        type='text'
                        name='city'
                        placeholder = 'City'
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                    />

                    <Form.Control  
                        type='text'
                        name='zip'
                        placeholder = 'Zipcode'
                        onChange={(e) => setZip(e.target.value)}
                        value={zip}
                    />
                
                </Form>
            </ModalBody>
            
            <ModalFooter>
                <Button variant='warning' onClick={updateBrewery}>Update Brewery</Button>  
                <Button variant='secondary' onClick={hideModal}>Cancel</Button>    
            </ModalFooter>
        </Modal>
        <Button variant='warning' onClick={showModal}>Update Brewery</Button>   
    </>
   );
}