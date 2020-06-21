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
*/