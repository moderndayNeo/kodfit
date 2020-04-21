import React from 'react';
import './WorkoutList.css';
import ExercisesListComponent from './ExercisesListComponent';
import ExercisesListData from '../../../Data/ExercisesListData';

export default function WorkoutList() {
    return (
        <div className="WorkoutsList">
            <div className="containerTop">
            <a className="button One" href="../home">Workouts</a>
            <a className="button Two" href="./workout-list">Exercise List</a>
            </div>
            
            <div className="containerBottom"> {
                ExercisesListData().map(list => {
                    return (
                    <ExercisesListComponent
                        key={list.listName}
                        id={list.id}
                        listName={list.listName}
                        image={list.image}
                    />
                    );
                })
            }  
            </div>                    
        </div>
        
    )
}
