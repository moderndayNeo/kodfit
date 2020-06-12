import React from 'react';
import './PopupButton.css';

export default function PopupButton({ onClick, infoProvided }) {
    return (
        <button
            className={`PopupButton button primary rounded-capsule update-stats ${!infoProvided && "bouncing"}`}
            onClick={onClick}
        >
            Update your stats
        </button>
    );
}
