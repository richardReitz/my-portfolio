import React from 'react';
import logo from '../../assets/Logo-RR.png'
import './header.css';

export default function HeaderMenu() {
    return (
        <div className='header-view'>
            <div className='logo'>
                <a href="/">
                    <img src={logo} alt="Logo" />
                </a>
            </div>
            <div>
                <ul className='navbar'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#about">Sobre</a>
                    </li>
                    <li>
                        <a href="#projects">Projetos</a>
                    </li>
                    <li>
                        <a href="#contact">Contato</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}