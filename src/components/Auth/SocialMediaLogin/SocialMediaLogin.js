import React from 'react';
import { Button } from 'react-bootstrap';
import './SocialMediaLogin.css';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const SocialMediaLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);

    if (googleUser || facebookUser) {
        navigate('/home');
        console.log(facebookUser);
    }

    let displayError;
    if (googleError || facebookError) {
        displayError = <h5 className='text-danger text-center '>{googleError?.message} {facebookError?.message}</h5>
    }
    if (googleLoading || facebookLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-3'>
            {displayError}
            <div className='d-flex justify-content-center my-3 social-buttons'>
                <Button variant="outline-secondary" className='w-50 me-3' onClick={() => { signInWithGoogle() }}>Google</Button>
                <Button variant="outline-secondary" className='w-50' onClick={() => { signInWithFacebook() }}>Facebook</Button>
            </div>
        </div>
    );
};

export default SocialMediaLogin;