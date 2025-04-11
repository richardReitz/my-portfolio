import React from 'react';
import './styles.css';

export default function ContactCard({ link, label, contact, icon }) {
    return (
        <a href={link} className='contact-card'>
            <div className='icon-wrapper'>
                {icon}
            </div>
            <p>{label}</p>
            <span>{contact}</span>
        </a>
    );
}