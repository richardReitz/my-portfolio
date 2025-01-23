import './index.css';
import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

import logoRR from '../../assets/Logo-RR.png';

export default function FooterSection() {
    return (
        <footer className='footer'>
            <div className='logo-footer'>
                <a href="/">
                <img src={logoRR} alt="Logo Richard Reitz" />
                </a>
            </div>
            <div>
                <span>© Developed by Richard Reitz</span>
            </div>
            <div className='footer-icons'>
                <a href='https://www.linkedin.com/in/richard-reitz/'>
                    <FaLinkedin size={32} />
                </a>
                <a href='https://github.com/richardReitz/'> 
                    <FaGithub size={32} /> 
                </a>
            </div>
        </footer>
    );
}