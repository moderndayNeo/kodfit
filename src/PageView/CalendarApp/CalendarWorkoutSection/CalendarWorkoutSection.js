import React from 'react'
import './CalendarWorkoutSection.css'
import RandomExerciseList from '../RandomExerciseGen/RandomExerciseList'
import StartButton from '../../WorkoutsMain/StartButton/StartButton'

export default function CalendarWorkoutSection() {
    return (
        <div className="CalendarWorkoutSection">
            <div className="title-and-button">
                <h3 className="title">Daily Workout</h3>
                <StartButton destination="random" />
            </div>
            <div className="calendarExerciseList">
                <RandomExerciseList />
            </div>
        </div>
    )
}
