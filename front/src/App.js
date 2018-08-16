import React, { Component } from 'react';
import './App.css';

import Ranking from './ranking/Ranking.jsx';
import Social from './social/Social.jsx';
import Plateau from './Plateau.jsx';
import CreateGame from './createGame/CreateGame.jsx';
import Lobby from './Lobby.jsx';
import CountDownToGame from './countDownToGame/CountDownToGame.jsx';
import WaitingForPlayers from './waitingForPlayers/WaitingForPlayers.jsx';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Wild Pursuit</h1>
				<h2>A la recherche de la quête perdue</h2>
				<Lobby />
				<Ranking />
				<Social />
				<Plateau />
				<CreateGame />
				<CountDownToGame countDown={10} />
				<WaitingForPlayers maxPLayers={8} />
			</div>
		);
	}
}

export default App;
