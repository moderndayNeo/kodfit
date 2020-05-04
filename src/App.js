import React from 'react';
import './App.css';
import './Utility.css';
import './Base.css';
import './Typography.css';
import './Buttons.css';
import PageView from './PageView/PageView';
import Logo from './Logo/Logo';
import ExerciseContext from './context/ExerciseContext'

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
