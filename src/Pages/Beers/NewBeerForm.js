import React, {useState, useEffect} from 'react';
import { Form, Modal, ModalBody, 
    ModalFooter, ModalHeader, ModalTitle, Button } from 'react-bootstrap';
import axios from 'axios';

import './beers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons'

//NewBeerForm is a functional (stateless) component | recieves props
export function NewBeerForm ({fetchData}) {
    
    const [name, setName] = useState(''); 
    const [brewery, setBrewery] = useState('');
    const [abv, setAbv] = useState('');
    const [ibu, setIbu] = useState('');
    const [style, setStyle] = useState('');
    const [imgURL, setImgURL] = useState('');
    const [notes, setNotes] = useState('');
    const [type, setType] = useState('');
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

   //function to add new beer
    async function addNewBeer () {

        //validate inputs are not blank
        if (name && brewery && abv && ibu && style && imgURL && notes && type) {             
            //if valid input, try adding brewery
            try {
                const newBeer = {name, brewery, abv, ibu, style, imgURL, notes, type};
                const resp = await axios.post(Endpoint, newBeer);
            } catch (error) {
                console.log("Error adding Beer! ", error);
            }
                setName('');                                //reset form inputs for good UX
                setBrewery('');
                setAbv('');
                setIbu('');
                setStyle('');
                setImgURL('');
                setNotes('');
                setType('');
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
                <ModalTitle>ADD A NEW BEER</ModalTitle>
            </ModalHeader>
            
            <ModalBody>
                <p>Thanks for taking the time to add a new Florida Beer to our database! Please use the form below to enter your information.<br/>
                <small><em>A good place to find beer logos is are from the breweries' web sites. Find the beer image and right click and select
                     <strong> 'Copy Image Address'</strong></em></small></p>

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

                    <Form.Control  
                        type='text'
                        name='logoURL'
                        placeholder = 'Enter Beer Logo URL'
                        onChange={(e) => setImgURL(e.target.value)}
                        value={imgURL}
                    />

                    <Form.Control  
                        as='textarea'
                        rows={3}
                        name='notes'
                        placeholder = 'Enter Brewer Notes'
                        onChange={(e) => setNotes(e.target.value)}
                        value={notes}
                    />

                    {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="Core Beer"
                                name="core"
                                value="Core Beer"
                                type={type}
                                id={`inline-${type}-core`}
                                onChange={(e) => setType(e.target.value)}
                            />
                            <Form.Check
                                inline
                                label="Seasonal Beer"
                                name="seasonal"
                                value="Seasonal Beer"
                                type={type}
                                id={`inline-${type}-seasonal`}
                                onChange={(e) => setType(e.target.value)}
                            />
                            <Form.Check
                                inline
                                label="Special Release Beer"
                                name="special"
                                value="Special Release Beer"
                                type={type}
                                id={`inline-${type}-special`}
                                onChange={(e) => setType(e.target.value)}
                            />
                            </div>
                        ))}
                
                </Form>
            </ModalBody>
            
            <ModalFooter>
                <Button variant='warning' onClick={addNewBeer}>Add New Beer <FontAwesomeIcon icon={faBeerMugEmpty}/></Button>
                <Button variant='secondary' onClick={hideModal}>Cancel</Button>    
            </ModalFooter>
        </Modal>
        <Button variant='danger' onClick={showModal}>Add A Florida Beer <FontAwesomeIcon icon={faBeerMugEmpty}/></Button>     
    </>
   );
}