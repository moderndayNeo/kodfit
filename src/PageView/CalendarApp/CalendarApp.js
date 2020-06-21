import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useLocation, useHistory, useRouteMatch, useParams } from 'react-router-dom'
import './CalendarApp.css';
import CalendarWorkoutSection from './CalendarWorkoutSection/CalendarWorkoutSection'

export default function CalendarApp() {
  const [date, setDate] = useState(new Date());
  const onChange = date => setDate(date);
  // console.log(window.location.pathname)
  let location = useLocation()
  let history = useHistory()
  let params = useParams()
  let routeMatch = useRouteMatch()
  // console.log(location)
  console.log(history)
  // console.log(params)
  // console.log(routeMatch)

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
      <CalendarWorkoutSection />
    </div>  
  );  
}
