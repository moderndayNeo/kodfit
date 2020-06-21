import React from 'react'
import './StartButton.css'
import { Link } from 'react-router-dom'

export default function StartButton({ destination }) {
    return (
        <Link to={`/dashboard/workout-current/${destination}`}>
            <div className="StartButton button primary rounded-capsule">
                Start
            </div>
        </Link>
    )
}
