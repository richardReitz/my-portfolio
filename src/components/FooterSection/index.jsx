import './index.css';
import React from 'react';
import { FaReact } from 'react-icons/fa';
import logoRR from '../../assets/Logo-RR.png';

export default function FooterSection() {
    return (
        <footer className='footer'>
            <div className='logo-footer'>
                <a href="/">
                    <img src={logoRR} alt="Logo Richard Reitz" />
                </a>
            </div>
            <div className='footer-right'>
                <span>© Developed by Richard Reitz</span>
                <FaReact />
            </div>
        </footer>
    );
}