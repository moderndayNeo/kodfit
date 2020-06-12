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
1. Google Login - errorHandle. Pause. If doesn't work provide a message:
This is a demo. Google Login not necessary. Redirecting to the app.
2. If user signs in with random account, tracker page must display dashes 
where weight and goals would be.
3. Profile - if user has not provided any stats, make the update your stats button
bounce every 3 seconds
4. Display default profile picture if no user image available
*/