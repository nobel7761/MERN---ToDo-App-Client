import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Notes.css';

const Notes = () => {
    return (
        <div className='notes-container'>
            <Card className='card-container'>
                <Card.Body className='d-flex justify-content-between align-items-center'>
                    <Card.Title>Card Title</Card.Title>
                    <div className='d-flex align-items-center'>
                        <Button variant="outline-info">Complete</Button>
                        <FontAwesomeIcon icon={faTrashCan} className='icon' />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Notes;