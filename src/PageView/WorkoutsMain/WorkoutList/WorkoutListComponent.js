import React from 'react';
import { Link } from 'react-router-dom'
import './WorkoutListComponent.css';


export default class WorkoutListComponent extends React.Component {

  render() {
    let { workoutName, image, workoutAlt } = this.props;

    return (
      <Link to={`/dashboard/workouts/home/${workoutName}`}>
          <div className="routine">
            <p className="text">{workoutName}</p>
            <img src={image} alt={workoutAlt}/>
          </div>
      </Link>
    )
  }
}

             
