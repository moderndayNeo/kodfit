import React from 'react';
import './ExerciseListDetails.css';
import ExerciseList from './WorkoutExerciseList';
import ExercisesData from '../../../Data/ExercisesData';


export default class ExerciseListDetails extends React.Component {
    constructor() {
        super();
        this.state = { listId: {} };
      }

      componentDidMount() {
          let listId = this.props.match.params.listId;
          this.setState({
            list: listId
        });
    }
      
    render() {
        return (
            <div className="ExercisesList">
                <div className="containerTop">
                <a className="button Two" href="./">Exercise List</a>
                </div>
                
                <div className="containerBottom"> {
                    ExercisesData()
                    .filter(exercise => exercise.category === this.state.list)
                    .map(exercise => {
                        return (
                        <ExerciseList
                            key={exercise.id}
                            id={exercise.id}
                            exerciseName={exercise.exerciseName}
                            reps={exercise.reps}
                        />
                        );
                    })
                }  
                </div>                    
            </div>
        )
    }
}