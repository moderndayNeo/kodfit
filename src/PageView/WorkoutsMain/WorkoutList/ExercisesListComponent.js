import React from 'react';
import { Link } from 'react-router-dom';


export default class ExercisesListComponent extends React.Component {

  render() {
    let { id, listName, image, listAlt } = this.props;

    return (
      <Link to={`/dashboard/workouts/workout-list/${id}`}>
          <div className="list">
            <p className="text">{listName}</p>
            <img src={image} alt={listAlt}/>            
          </div>
      </Link>
    )
  }
}

             
