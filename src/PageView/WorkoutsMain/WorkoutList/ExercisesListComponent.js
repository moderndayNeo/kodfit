import React from 'react';
//mport './WorkoutListComponent.css';


export default class ExercisesListComponent extends React.Component {

  render() {
    let { listName, image, listAlt } = this.props;

    return (
          <div className="list">
            <p className="text">{listName}</p>
            <img src={image} alt={listAlt}/>
          </div>
    )
  }
}

             
