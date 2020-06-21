import React, { useContext, useEffect, useState } from 'react'
import { ExerciseContext } from '../../../context/ExerciseContext'
import ExercisesData from '../../../Data/ExercisesData'
import SmallTimer from '../../Timer/SmallTimer/SmallTimer'
import './WorkoutCurrent.css'
import { useLocation } from 'react-router-dom'

export default function WorkoutCurrent() {
    const location = useLocation()
    const slug = location.pathname.split('/').pop()
    const filtered = ExercisesData()
        .filter(
            (exercise) =>
                exercise.category === slug || exercise.workout === slug
        )
        .map((exercise) => exercise.exerciseName)
    const randomExercises = useContext(ExerciseContext)
    let [position, setPosition] = useState(0)
    let time = 30000

    useEffect(() => {
        if (
            position <= randomExercises.calendarExercisesList.length ||
            position <= filtered.length
        ) {
            const interval = setInterval(() => {
                setPosition(position + 1)
            }, time)
            return () => clearInterval(interval)
        }
    }, [
        position,
        randomExercises.calendarExercisesList.length,
        filtered.length,
        time,
    ])

    let itemIndex =
        slug === 'random'
            ? randomExercises.calendarExercisesList[position]
            : position

    return (
        <div className="WorkoutCurrent container">
            <h2 className="separator-center">Workout Generator!</h2>
            <main>
                <div className="containerOne-content workoutAction">
                    {slug === 'random' ? (
                        itemIndex && (
                            <>
                                <h2>#{itemIndex}</h2>
                                <h2 className="workout-name">
                                    {ExercisesData()[itemIndex].exerciseName}
                                </h2>
                                <SmallTimer timer={time / 1000} />
                            </>
                        )
                    ) : (
                        <>
                            <h2>#{itemIndex + 1}</h2>
                            <h2 className="workout-name">
                                {filtered[itemIndex]}
                            </h2>
                            <SmallTimer timer={time / 1000} />
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}
