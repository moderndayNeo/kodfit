import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CalendarApp from './CalendarApp/CalendarApp';
import NearMe from './NearMe/NearMe';
import WorkoutList from './WorkoutsMain/WorkoutList/WorkoutList';
import ExerciseListDetails from './WorkoutsMain/WorkoutExerciseList/ExerciseListDetails/ExerciseListDetails';
import WorkoutCurrent from './WorkoutsMain/WorkoutCurrent/WorkoutCurrent';
import Tracker from './Tracker/Tracker';
import Login from './Login/Login';
import Timer from './Timer/Timer';
import LandingPage from '../LandingPage/LandingPage';
import StopWatch from './Timer/StopWatch/StopWatch';
import Profile from './Profile/Profile';
import Navbar from './NavBar/NavBar';
import Elements from './Elements/Elements';
import './PageView.css';

class DebugRouter extends Router {
  constructor(props){
    super(props);
    console.log('initial history is: ', JSON.stringify(this.history, null,2))
    this.history.listen((location, action)=>{
      console.log(
        `The current URL is ${location.pathname}${location.search}${location.hash}`
      )
      console.log(`The last navigation action was ${action}`, JSON.stringify(this.history, null,2));
    });
  }
}

export default function PageView() {
  return (
    <DebugRouter>
     {/* <Router> */}
      <Switch />
      <div className="PageView">
        <section className="container">
          <Route path="/login" exact component={Login} />
          <Route path="/dashboard/calendar" exact component={CalendarApp} />
          <Route path="/dashboard/near-me" exact component={NearMe} />
          <Route path="/dashboard/workouts/:view/" exact component={WorkoutList} />
          <Route path="/dashboard/workouts/home/:listId" exact component={ExerciseListDetails} />
          <Route path="/dashboard/workouts/exercise-list/:listId" exact component={ExerciseListDetails} />
          <Route path="/dashboard/workout-current" exact component={WorkoutCurrent} />
          <Route path="/dashboard/tracker" exact component={Tracker} />
          <Route path="/dashboard/timer" exact component={Timer} />
          <Route path="/dashboard/stopwatch" exact component={StopWatch} />
          <Route path="/dashboard/profile" exact component={Profile} />
          <Route path="/dashboard/elements" exact component={Elements} />
        </section>
        <Route exact path="/dashboard/:slug" component={Navbar} />
        <Route exact path="/dashboard/" component={Navbar} />
        <Route exact path="/dashboard/workouts/:slug" component={Navbar} />
        <Route exact path="/dashboard/workouts/home/:slug" component={Navbar} />
        <Route path="/" exact component={LandingPage} />
      </div>
      <Switch />
    {/* </Router> */}
  </DebugRouter >
  );
}