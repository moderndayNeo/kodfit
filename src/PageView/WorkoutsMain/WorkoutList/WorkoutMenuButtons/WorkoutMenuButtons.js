import React from 'react'
import './WorkoutMenuButtons.css'

export default function WorkoutMenuButtons() {
    return (
        <div className="WorkoutMenuButtons">
            <a className="button primary rounded-capsule" href="./home">
                Workouts
            </a>
            <a
                className="button secondary rounded-capsule"
                href="./exercise-list"
            >
                Exercises
            </a>
            <a className="button secondary rounded-capsule" href="../timer">
                Timer
            </a>
        </div>
    )
}
