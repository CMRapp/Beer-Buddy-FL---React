import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export default function Styles () {
   
    return  (
        <>            
            <Container>
                <Image src="./img/coming-soon.jpg" fluid className='mt-3 shadow p-3 mb-5 bg-white rounded'/>
            </Container>
        </>
    );

}