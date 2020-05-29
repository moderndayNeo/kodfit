import React from 'react';

export default function InputBox({ type, placeholder }) {
    return (
        <div className="inputBox-content">
            <input type={type} placeholder={placeholder} />
        </div>
    );
}
