import React from 'react';
import './InputField.css';

export default function InputField({ title, type, placeholder, onChange }) {
    return (
        <div className="InputField">
            <p className="title">{title}</p>
            <input type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    );
}
