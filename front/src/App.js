import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Ranking from './ranking/Ranking.jsx';
import Social from './social/Social.jsx';
import CountDown from './countDown/CountDown.jsx';
import Plateau from './Plateau.jsx';
import CreateGame from './createGame/CreateGame.jsx';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Wild Pursuit</h1>
				<h2>A la recherche de la quête perdue</h2>
				<Ranking />
				<Social />
				<CountDown seconds="120" />
				<Plateau />
				<CreateGame />
			</div>
		);
	}
}

export default App;
