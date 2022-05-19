import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='copyright-container'>
            <p>Copyrights &copy; {year} MD. Habibur Rahaman Nobel. All rights reserved.</p>
        </div>
    );
};

export default Footer;