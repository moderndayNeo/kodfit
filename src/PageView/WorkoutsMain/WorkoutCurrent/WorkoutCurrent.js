import React, { useContext, useEffect, useState } from 'react';
import { ExerciseContext } from '../../../context/ExerciseContext'
import ExercisesData from '../../../Data/ExercisesData';
import SmallTimer from '../../Timer/SmallTimer/SmallTimer';
import './WorkoutCurrent.css';
import { useLocation } from 'react-router-dom'

export default function WorkoutCurrent() {
    const location = useLocation()
    const slug = location.pathname.split('/').pop()
    console.log(slug)

    const exercises = useContext(ExerciseContext); // An array of seven random numbers
    // const exercises = slug === 'random' ? useContext(ExerciseContext) : an array from 0 - 6

    let [position, setPosition] = useState(0);
    let time = 30000;

  useEffect(() => {
        if(position <= exercises.calendarExercisesList.length) { 
            const interval = setInterval(() => {
                setPosition(position + 1);
            }, time);
            return () => clearInterval(interval);
        }
   }, [position, exercises.calendarExercisesList.length, time]);

    let itemIndex = exercises.calendarExercisesList[position];

    return (
        <div className="WorkoutCurrent container">
            <h2 className="separator-center">
                Workout Generator!
            </h2>
            <main>
                <div className="containerOne-content workoutAction">
                    {
                        itemIndex && 
                        <>  
                            <h2>#{itemIndex}</h2>
                            <h2 className='workout-name'>
                                {ExercisesData()[itemIndex].exerciseName}
                                {/* {
                                    slug === 'random' ?
                                    ExercisesData()[itemIndex].exerciseName :
                                    ExercisesData().filter(exercise => exercise.category === listID || exercise.workout === listID)[itemIndex].exerciseName
                                } */}

                            </h2>
                            <SmallTimer timer={time / 1000}/>
                        </>
                    }
                </div >
            </main>  
        </div>
    )
}
