import './index.css';
import React from 'react';
import { FaReact } from 'react-icons/fa';

export default function FooterSection() {
    return (
        <footer className='footer'>
            <div className='footer-right'>
                <span>© Developed by Richard Reitz</span>
                <FaReact />
            </div>
        </footer>
    );
}