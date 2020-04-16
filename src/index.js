import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// Suggesting reading the below article if you are wondering about the webfontloader implementation
// https://scotch.io/@micwanyoike/how-to-add-fonts-to-a-react-project
WebFont.load({
	google: {
	  families: ['Play:400,700', 'sans-serif']
	}
});


if (module.hot) {
	module.hot.accept();
}