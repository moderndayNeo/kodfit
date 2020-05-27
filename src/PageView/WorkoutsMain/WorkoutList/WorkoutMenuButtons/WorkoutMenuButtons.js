import React from 'react'
import './WorkoutMenuButtons.css'

export default function WorkoutMenuButtons() {
    return (
        <div className="WorkoutMenuButtons">
                    <div className="containerTop">
          <a className="button primary rounded-capsule" href="./home">Workouts</a>
          <a className="button secondary rounded-capsule" href="./workout-list">Exercises</a>
          <a className="button secondary rounded-capsule" href="../timer">Timer</a>
        </div>
        </div>
    )
}
