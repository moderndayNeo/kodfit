import React from 'react'
import './ExerciseListDetails.css'
import ExerciseList from '../WorkoutExerciseList'
import ExercisesData from '../../../../Data/ExercisesData'
import ReturnButton from './ReturnButton/ReturnButton'
import StartButton from '../../StartButton/StartButton'

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
            listId: listId,
        })
    }

    render() {
        return (
            <div className="ExercisesList">
                <ReturnButton onClick={() => this.props.history.goBack()} />
                <StartButton destination={this.state.listId} />

                <div className="containerBottom">
                    {ExercisesData()
                        .filter((exercise) => {
                            return (
                                exercise.category === this.state.listId ||
                                exercise.workout === this.state.listId
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
