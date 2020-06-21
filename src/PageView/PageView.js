import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CalendarApp from './CalendarApp/CalendarApp'
import NearMe from './NearMe/NearMe'
import WorkoutList from './WorkoutsMain/WorkoutList/WorkoutList'
import ExerciseListDetails from './WorkoutsMain/WorkoutExerciseList/ExerciseListDetails/ExerciseListDetails'
import WorkoutCurrent from './WorkoutsMain/WorkoutCurrent/WorkoutCurrent'
import Tracker from './Tracker/Tracker'
import Login from './Login/Login'
import Timer from './Timer/Timer'
import LandingPage from '../LandingPage/LandingPage'
import StopWatch from './Timer/StopWatch/StopWatch'
import Profile from './Profile/Profile'
import Navbar from './NavBar/NavBar'
import Elements from './Elements/Elements'
import './PageView.css'

export default function PageView() {
    return (
        <Router>
            <Switch />
            <div className="PageView">
                <section className="container">
                    <Route exact path="/login" component={Login} />
                    <Route
                        exact
                        path="/dashboard/calendar"
                        component={CalendarApp}
                    />
                    <Route exact path="/dashboard/near-me" component={NearMe} />
                    <Route
                        exact
                        path="/dashboard/workouts/:view/"
                        component={WorkoutList}
                    />
                    <Route
                        exact
                        path="/dashboard/workouts/home/:listId"
                        component={ExerciseListDetails}
                    />
                    <Route
                        exact
                        path="/dashboard/workouts/exercise-list/:listId"
                        component={ExerciseListDetails}
                    />
                    <Route
                        // exact
                        path="/dashboard/workout-current"
                        component={WorkoutCurrent}
                    />
                    <Route
                        exact
                        path="/dashboard/tracker"
                        component={Tracker}
                    />
                    <Route exact path="/dashboard/timer" component={Timer} />
                    <Route
                        exact
                        path="/dashboard/stopwatch"
                        component={StopWatch}
                    />
                    <Route
                        exact
                        path="/dashboard/profile"
                        component={Profile}
                    />
                    <Route
                        exact
                        path="/dashboard/elements"
                        component={Elements}
                    />
                </section>
                <Route path="/dashboard/:slug" component={Navbar} />
                <Route exact path="/" component={LandingPage} />
            </div>
            <Switch />
        </Router>
    )
}
