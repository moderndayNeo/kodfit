import React from 'react'
import './ReturnButton.css'

export default function ReturnButton() {
    return (
        <div className="ReturnButton">
            <a
                className="button primary rounded-capsule"
                href="../exercise-list"
            >
                Back To Exercises
            </a>
        </div>
    )
}
