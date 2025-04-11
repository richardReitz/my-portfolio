import './index.css';
import React from 'react';
import Title from '../Title';

import CV from '../../assets/CV-RR.pdf';
import avatarImg from '../../assets/richard.jpg'

export default function PresentationSection() {
    return (
        <section id='presentation'>
            <div data-aos="fade-right" className='intro-text'>
                <Title 
                    title="Olá, me chamo"
                />
                <h3>Richard Reitz</h3>
                <p>Desenvolvedor de Software</p>
                <a href={CV} download className='btn-cv'>Download CV</a>
                <hr className='line'/>
            </div>
            <div data-aos="fade-left" className='avatar-div'>
                <img src={avatarImg} alt="Foto autor"/>
            </div>
        </section>
    );
}