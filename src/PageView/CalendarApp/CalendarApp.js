import React, { useState } from 'react';
import Calendar from 'react-calendar';
import ExercisesData from '../../Data/ExercisesData';
import ExerciseList from '../WorkoutsMain/WorkoutExerciseList/WorkoutExerciseList';
import './CalendarApp.css';

export default function CalendarApp() {
  const [date, setDate] = useState(new Date());

  const onChange = date => setDate(date);

  const getRandomNumbersArray = (el) => {
    let randomNumbersArray = [];
    for(let i = 0; i < el; i++) {
      let randomNumber = Math.floor(Math.random() * ExercisesData().length);
      if(randomNumbersArray.includes(randomNumber)){
        randomNumber === 0 ?
          randomNumbersArray.push(randomNumber + 1) :
          randomNumbersArray.push(randomNumber - 1)
      } else {
        randomNumbersArray.push(randomNumber)
      }
    }
    return randomNumbersArray
  };

  let positions = getRandomNumbersArray(7);

  return (
    <div className="calendarAppContainer">
        <h2 className="calendarTitle">Activity Calendar</h2>
      
      <div className="calendarOne">
        <main className="calendarContent">
          <Calendar
            minDate={new Date(2020, 0, 1)}
            maxDate={new Date(2020, 11, 31)}
            showNeighboringMonth={false}
            minDetail={'year'}
            prev2Label={null}
            nextLabel={'▶︎'}
            prevLabel={'◀︎'}
            next2Label={null}
            onChange={onChange}
            value={date}
          />
        </main>
      </div>
  
      <div className="calendarWorkoutContainer">
        <div className="ContainerContent">
          <h3 className="title">Daily Workout</h3>
          <button className="button primary rounded-capsule">Start</button>
          <div className="calendarExerciseList"> 
          {
            Array.isArray(positions) && positions.map((position, index) => (
              <ExerciseList
                key={ExercisesData()[position].exerciseName + index}
                exerciseName={ExercisesData()[position].exerciseName}
                reps={ExercisesData()[position].reps}
              />
            ))
          }
          </div>
        </div>
      </div> 
    </div>  
  );  
}




  