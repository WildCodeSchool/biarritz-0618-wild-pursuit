import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Ranking from './ranking/Ranking.jsx';
import Social from './social/Social.jsx';
import Die from './Die.js';
import CountDown from './countDown/CountDown.jsx';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Die />
				<h1>Wild Pursuit</h1>
				<h2>A la recherche de la quête perdue</h2>
				<Ranking />
				<Social />
				<CountDown seconds="65" />
			</div>
		);
	}
}

export default App;
