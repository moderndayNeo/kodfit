import React from 'react';
import './Input.css';

export default function Input({ title, type, placeholder, onChange }) {
    return (
        <div className="Input">
            <p className="title">{title}</p>
            <input type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    );
}
