import React from 'react'
import './ReturnButton.css'

export default function ReturnButton({ onClick }) {
    return (
        <div
            className="ReturnButton button primary rounded-capsule"
            onClick={onClick}
        >
                Go Back
        </div>
    )
}
