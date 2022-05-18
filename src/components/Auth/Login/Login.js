import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';
import './Login.css';

const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;


        console.log(email, password);

    }


    return (
        <div className='register-background'>
            <div className='container form-container'>
                <h1 className='text-center py-4'>Please Login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <p className='text-center'>Don't Have An Account? <Link to='/register' >Please Register</Link></p>
                    </Form.Group>
                    <div className='w-100'>
                        <Button variant="primary" type="submit" className='w-75 mx-5'>
                            Login
                        </Button>
                    </div>
                </Form>

                <SocialMediaLogin></SocialMediaLogin>
            </div>
        </div>
    );
};

export default Login;