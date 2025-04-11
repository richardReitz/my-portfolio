import React from 'react';
import './styles.css';

export default function StackCard({ label, icon }) {
    return (
        <div className='stack-card'>
            <p>{label}</p>
            {icon}
        </div>
    );
}