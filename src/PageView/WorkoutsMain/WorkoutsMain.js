import React from 'react';
import './WorkoutsMain.css';
import WorkoutsData from '../../Data/WorkoutsData';
import WorkoutListComponent from '../WorkoutsMain/WorkoutList/WorkoutListComponent';

export default function WorkoutsMain() {
    return (
        <div className="WorkoutsMain">
            <div className="containerTop">
            <a className="button One" href="./Home">Workouts</a>
            <a className="button Two" href="./workout-list">Exercise List</a>
            </div>
            
            <div className="containerBottom"> {
                
                WorkoutsData().map(workout => {
                return (
                  <WorkoutListComponent
                    key={workout.workoutName}
                    workoutName={workout.workoutName}
                    image={workout.image}
                  />
                );
              })
            }  
             </div>
        </div>
    )
}
