import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CalendarApp from './CalendarApp/CalendarApp';
import NearMe from './NearMe/NearMe';
import WorkoutList from './WorkoutsMain/WorkoutList/WorkoutList';
import ExerciseListDetails from './WorkoutsMain/WorkoutExerciseList/ExerciseListDetails';
import WorkoutCurrent from './WorkoutsMain/WorkoutCurrent/WorkoutCurrent';
import Tracker from './Tracker/Tracker';
import Login from './Login/Login';
import Timer from './Timer/Timer';
import LandingPage from '../LandingPage/LandingPage';
import StopWatch from './Timer/StopWatch/StopWatch';
import Profile from './Profile/Profile';
import Navbar from './NavBar/NavBar';
import Elements from './Elements/Elements';
import './PageView.css'

export default function PageView() {
  return (
    <Router>
      <div className="PageView">
        <Route path="/" exact component={LandingPage} />
        <section className="container">
          <Route path="/login" exact component={Login} />
          <Route path="/dashboard/calendar" exact component={CalendarApp} />
          <Route path="/dashboard/near-me" exact component={NearMe} />
          <Route path="/dashboard/workouts/:view/" exact component={WorkoutList} />
          <Route path="/dashboard/workouts/home/:listId" exact component={ExerciseListDetails} />
          <Route path="/dashboard/workouts/workout-list/:listId" exact component={ExerciseListDetails} />
          <Route path="/dashboard/workout-current" exact component={WorkoutCurrent} />
          <Route path="/dashboard/tracker" exact component={Tracker} />
          <Route path="/dashboard/timer" exact component={Timer} />
          <Route path="/dashboard/stopwatch" exact component={StopWatch} />
          <Route path="/dashboard/profile" exact component={Profile} />
          <Route path="/dashboard/elements" exact component={Elements} />
        </section>
      </div>
        <Route path="/dashboard/:slug" component={Navbar} />
    </Router>
  );
}