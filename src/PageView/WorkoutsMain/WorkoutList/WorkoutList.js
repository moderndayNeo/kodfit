import React from 'react';
import './WorkoutList.css';
import ExercisesListComponent from './ExercisesListComponent';
import ExercisesListData from '../../../Data/ExercisesListData';
import WorkoutListComponent from './WorkoutListComponent';
import WorkoutsData from '../../../Data/WorkoutsData';

export default function WorkoutList(props) {
    return (
      <div className="WorkoutsList">
        <div className="containerTop">
          <a className="button primary rounded-capsule" href="./home">Workouts</a>
          <a className="button secondary rounded-capsule" href="./workout-list">Exercises</a>
        </div>
        <div className="containerBottom">
          {" "}
          {props.match.params.view === "home" ? WorkoutsData().map(workout => {
            return (
              <WorkoutListComponent
                  key={workout.workoutName}
                  workoutName={workout.id}
                  image={workout.image}
                  workout={workout.workout}
                />
            );
          }) : ExercisesListData().map(list => {
              return (
                <ExercisesListComponent
                key={list.listName}
                id={list.id}
                listName={list.listName}
                image={list.image}
              />
              );
            })}
        </div>
      </div>
    );
  }