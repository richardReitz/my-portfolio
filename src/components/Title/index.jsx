import React from 'react';
import './title.css';

export default function Title({title, subtitle}) {
    return (
        <div>
            <hr className='dash'/>
            <h1 className='title'>{title}</h1>
            <h1 className='title'>{subtitle}</h1>
        </div>
    );
}