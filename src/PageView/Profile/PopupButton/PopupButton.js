import React from 'react';
import './PopupButton.css';

export default function PopupButton({ onClick }) {
    return (
        <button
            className="PopupButton button primary rounded-capsule update-stats"
            onClick={onClick}
        >
            Update your stats
        </button>
    );
}
