import React from 'react';
import './App.css';
import './Utility.css';
import './Base.css';
import './Typography.css';
import './Buttons.css';
import PageView from './PageView/PageView';
import Logo from './Logo/Logo';
import ExerciseContext from './context/ExerciseContext';

function App() {
    return (
        <div className="App">
            <Logo data-testid="logo" />
            <ExerciseContext>
                <PageView />
            </ExerciseContext>
        </div>
    );
}
export default App;

/*
To Do:
WorkoutCurrent should be a re-usable component.
Simply provide the list of 7 exercises required. It will start the timer and run through the list, regardless of where the data came from.

Click Start => Trigger workoutCurrent
Doesn't matter if coming from Calendar, workout or exercises


Start Button - takes href as props

Calendar => href to workout-current
Workouts/Exercises => href to workout-current/listId

/dashboard/workouts/home/CoreAbs
/dashboard/workouts/exercise-list/Chest

On workouts/home or workouts/exercise list, for each page, create
a listId variable and assign it the listID from the url parameters

Each ExerciseList component has a Start Button that redirects to
/current-workout/listId


On current-workout/listId, the current workout component takes the listID
from the url. It then checks the exercise data for exercises with the
workout or category that match the listId.
It then begins the timer and displays those exercises


workoutCurrent/listId
*/