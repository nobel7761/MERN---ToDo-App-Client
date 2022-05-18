import React from 'react';
import { Button } from 'react-bootstrap';
import NavMenu from '../../Shared/NavMenu/NavMenu';
import Notes from '../Notes/Notes';
import './Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <NavMenu></NavMenu>
            <div className='home'>
                <h1 className=''><strong>T O D O</strong></h1>
                <div className='input-fields'>
                    <input type="text" name="title" placeholder='Enter Your Title' />
                    <textarea name="notes" placeholder='Type Your Notes Here' cols="30" rows="5"></textarea>
                    <Button variant="outline-info" className='mx-5'>ADD TASK</Button>
                </div>
            </div>
            <div className='HR'></div>

            <Notes></Notes>
        </div>
    );
};

export default Home;