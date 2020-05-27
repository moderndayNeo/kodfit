import React, { useState, useEffect } from 'react'
import './WorkoutMenuButtons.css'

export default function WorkoutMenuButtons({ urlSlug }) {
    let [displayed, setDisplayed] = useState('workout')

    useEffect(() => {
        return urlSlug === 'home'
            ? setDisplayed('workout')
            : setDisplayed('exercises')
    }, [urlSlug])

    return (
        <div className="WorkoutMenuButtons">
            <a
                className={`button ${
                    displayed === 'workout' ? 'primary' : 'secondary'
                } rounded-capsule`}
                href="./home"
            >
                Workouts
            </a>
            <a
                className={`button ${
                    displayed === 'exercises' ? 'primary' : 'secondary'
                } rounded-capsule`}
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
