import React from 'react'
import './PopupButton.css'

export default function PopupButton({ onClick, infoProvided }) {
    return (
        <button
            className={`PopupButton button primary rounded-capsule update-stats ${
                !infoProvided && 'call-user-attention'
            }`}
            onClick={onClick}
        >
            Update your stats
        </button>
    )
}
