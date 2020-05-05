import React from 'react';
import './UpdateButton.css';

export default function UpdateButton({ onClick }) {
    return (
        <button className="UpdateButton button primary" onClick={onClick}>
            Update
        </button>
    );
}
