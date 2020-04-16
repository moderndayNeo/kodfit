import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CalendarApp from './CalendarApp/CalendarApp';
import NearMeGyms from './NearMe/NearMeGyms/NearMeGyms';
import WorkoutsMain from './WorkoutsMain/WorkoutsMain';
import WorkoutList from './WorkoutsMain/WorkoutList/WorkoutList';
import WorkoutCurrent from './WorkoutsMain/WorkoutCurrent/WorkoutCurrent';
import Tracker from './Tracker/Tracker';
import Login from './Login/Login';
import Timer from './Timer/Timer';
import OurGoal from '../LandingPage/OurGoal/OurGoal';
import LandingPage from '../LandingPage/LandingPage';
import StopWatch from './Timer/StopWatch/StopWatch';
import Profile from './Profile/Profile';
import AboutUs from './AboutUs/AboutUs';
import Navbar from './NavBar/NavBar';
import Elements from './Elements/Elements';
import './PageView.css'

export default function PageView() {
  return (
    <Router>
      <div className="PageView">
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/about" exact component={AboutUs} />
        <Route path="/our-goal" exact component={OurGoal} />
        <Route path="/dashboard/calendar" exact component={CalendarApp} />
        <Route path="/dashboard/near-me-gyms" exact component={NearMeGyms} />
        <Route path="/dashboard/home" exact component={WorkoutsMain} />
        <Route path="/dashboard/workout-list" exact component={WorkoutList} />
        <Route path="/dashboard/workout-current" exact component={WorkoutCurrent} />
        <Route path="/dashboard/tracker" exact component={Tracker} />
        <Route path="/dashboard/timer" exact component={Timer} />
        <Route path="/dashboard/stopwatch" exact component={StopWatch} />
        <Route path="/dashboard/profile" exact component={Profile} />
        <Route path="/dashboard/elements" exact component={Elements} />
      </div>
        <Route path="/dashboard/:slug" exact component={Navbar} />
    </Router>
  );
}