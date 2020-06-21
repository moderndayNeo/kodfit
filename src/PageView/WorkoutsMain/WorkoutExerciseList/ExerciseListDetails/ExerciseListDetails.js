import React from 'react'
import './ExerciseListDetails.css'
import ExerciseList from '../WorkoutExerciseList'
import ExercisesData from '../../../../Data/ExercisesData'
import ReturnButton from './ReturnButton/ReturnButton'

export default class ExerciseListDetails extends React.Component {
    constructor() {
        super()
        this.state = { 
            listId: {},
        }
    }

    componentDidMount() {
        let listId = this.props.match.params.listId
        this.setState({
            list: listId,
        })
    }
    
    render() {
        return (
            <div className="ExercisesList">
                <ReturnButton onClick={() => this.props.history.goBack()} />

                <div className="containerBottom">
                    {ExercisesData()
                        .filter((exercise) => {
                            return (
                                exercise.category === this.state.list ||
                                exercise.workout === this.state.list
                            )
                        })
                        .map((exercise) => {
                            return (
                                <ExerciseList
                                    key={exercise.id}
                                    id={exercise.id}
                                    exerciseName={exercise.exerciseName}
                                    reps={exercise.reps}
                                    workout={exercise.workout}
                                />
                            )
                        })}
                </div>
            </div>
        )
    }
}
