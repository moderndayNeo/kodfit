import React from 'react';
import './WorkoutListComponent.css';


export default class WorkoutListComponent extends React.Component {

  render() {
    let { workoutName, image, workoutAlt } = this.props;

    return (
          <div className="routine">
            <p className="text">{workoutName}</p>
            <img src={image} alt={workoutAlt}/>
          </div>
    )
  }
}

             
