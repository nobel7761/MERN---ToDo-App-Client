import React from 'react';
import { Button } from 'react-bootstrap';
import './SocialMediaLogin.css';

const SocialMediaLogin = () => {
    return (
        <div className='d-flex justify-content-center my-3 social-buttons'>
            <Button variant="outline-secondary" className='w-50 me-3'>Google</Button>
            <Button variant="outline-secondary" className='w-50'>Facebook</Button>
        </div>
    );
};

export default SocialMediaLogin;