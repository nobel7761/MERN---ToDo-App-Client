import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';
import './Register.css';

const Register = () => {
    return (
        <div className='login-background'>
            <div className='container form-container'>
                <h1 className='text-center py-4'>Please Register</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <p className='text-center'>Already Have An Account? <Link to='/login' >Please Login</Link></p>
                    </Form.Group>
                    <div className='w-100'>
                        <Button variant="primary" type="submit" className='w-75 mx-5'>
                            Register
                        </Button>
                    </div>
                </Form>

                <SocialMediaLogin></SocialMediaLogin>
            </div>
        </div>
    );
};

export default Register;