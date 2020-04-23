import React, { useState } from 'react';
import Calendar from 'react-calendar';
import RandomExerciseList from './RandomExerciseGen/RandomExerciseList';
import './CalendarApp.css';
import { Link } from 'react-router-dom';

export default function CalendarApp() {
  const [date, setDate] = useState(new Date());
  const onChange = date => setDate(date);

  return (
    <div className="calendarAppContainer">
      <h2 className="separator-center">Activity Calendar</h2>
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
  
      <div className="calendarWorkoutContainer container">
        <div className="ContainerContent">
          <h3 className="title">Daily Workout</h3>
          <Link to='/dashboard/workout-current'>
            <button className="button primary rounded-capsule">Start</button>
          </Link>
          <div className="calendarExerciseList"> 
            <RandomExerciseList />
          </div>
        </div>
      </div> 
    </div>  
  );  
}




  