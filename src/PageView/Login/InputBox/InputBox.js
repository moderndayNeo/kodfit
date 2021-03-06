import React from 'react';
import './InputBox.css'


export default function InputBox({ type, placeholder, onChange }) {
    return (
        <div className="InputBox">
            <input type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    );
}
