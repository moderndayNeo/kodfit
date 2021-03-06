import React from 'react'
import './WorkoutList.css'
import ExercisesListComponent from './ExercisesListComponent'
import ExercisesListData from '../../../Data/ExercisesListData'
import WorkoutListComponent from './WorkoutListComponent'
import WorkoutsData from '../../../Data/WorkoutsData'
import WorkoutMenuButtons from './WorkoutMenuButtons/WorkoutMenuButtons'

export default function WorkoutList(props) {
    const urlSlug = props.match.params.view

    return (
        <div className="WorkoutsList">
            <WorkoutMenuButtons urlSlug={urlSlug} />
            <div className="list-container">
                {urlSlug === 'home'
                    ? WorkoutsData().map((workout) => {
                          return (
                              <WorkoutListComponent
                                  key={workout.workoutName}
                                  workoutName={workout.id}
                                  image={workout.image}
                                  workout={workout.workout}
                              />
                          )
                      })
                    : ExercisesListData().map((list) => {
                          return (
                              <ExercisesListComponent
                                  key={list.listName}
                                  id={list.id}
                                  listName={list.listName}
                                  image={list.image}
                              />
                          )
                      })}
            </div>
        </div>
    )
}
