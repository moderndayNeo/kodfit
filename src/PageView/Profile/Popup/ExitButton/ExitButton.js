import React from 'react'
import './ExitButton.css'

export default function ExitButton({ onClick }) {
    return (
        <button className="ExitButton" onClick={onClick}>
            X
        </button>
    )
}
