import React, {useState, useEffect} from 'react';
import { Form, Modal, ModalBody, 
    ModalFooter, ModalHeader, ModalTitle, Button } from 'react-bootstrap';
import axios from 'axios';
import './beers.css';

//NewBeerForm is a functional (stateless) component | recieves props
export function NewBeerForm ({fetchData}) {
    
    const [name, setName] = useState(''); 
    const [brewery, setBrewery] = useState('');
    const [abv, setAbv] = useState('');
    const [ibu, setIbu] = useState('');
    const [style, setStyle] = useState('');
    const [reviews, setReviews] = useState([]);             //currently not used
    const [dateAdded, setDateAdded] = useState(new Date()); //currently not used
    
    //Define endpoint URL
    const Endpoint = 'https://64bedc3b5ee688b6250d0246.mockapi.io/beers';
    
    ///modal handling
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };

   
   //function to new brewery
    async function addNewBeer () {

        //validate inputs are not blank
        if (name && brewery && abv && ibu && style) {             
            //if valid input, try adding brewery
            try {
                const newBeer = {name, brewery, abv, ibu, style};
                const resp = await axios.post(Endpoint, newBeer);
            } catch (error) {
                console.log("Error adding Beer! ", error);
            }
                setName('');                                //reset form inputs for good UX
                setBrewery('');
                setAbv('');
                setIbu(undefined);
                setStyle('');
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
                <ModalTitle>ADD A NEW BEER</ModalTitle>
            </ModalHeader>
            
            <ModalBody>
                <p>Thanks for taking the time to add a new Florida Beer to our database! Please use the form below to enter your information.</p>
                <Form>
                    <Form.Control 
                        type='text'
                        name='name'
                        placeholder = 'Beer Name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
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
                
                </Form>
            </ModalBody>
            
            <ModalFooter>
                <Button variant='warning' onClick={addNewBeer}>Add New Beer</Button>
                <Button variant='secondary' onClick={hideModal}>Cancel</Button>    
            </ModalFooter>
        </Modal>
        <Button variant='danger' onClick={showModal}>Add A Florida Beer</Button>     
    </>
   );
}