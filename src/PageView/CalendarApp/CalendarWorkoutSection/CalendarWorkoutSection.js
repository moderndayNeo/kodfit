import React from 'react'
import './CalendarWorkoutSection.css'
import RandomExerciseList from '../RandomExerciseGen/RandomExerciseList'
import { Link } from 'react-router-dom'

export default function CalendarWorkoutSection() {
    return (
        <div className="CalendarWorkoutSection">
                <div className="title-and-button">
                    <h3 className="title">Daily Workout</h3>
                    <Link to="/dashboard/workout-current">
                        <button className="button primary rounded-capsule">
                            Start
                        </button>
                    </Link>
                </div>
                <div className="calendarExerciseList">
                    <RandomExerciseList />
                </div>
        </div>
    )
}
