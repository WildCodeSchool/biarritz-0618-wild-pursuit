import React, { Component } from 'react';
import Button from './button/Button.jsx';
import List from './list/List.jsx';

class Lobby extends Component {
	nbrJoueurs() {
		let x = Math.floor(Math.random() * (10 - 2)) + 2;
		let y = Math.floor(Math.random() * (x - 1 - 0)) + 0;
		let count = y + '/' + x;
		return count;
	}

	generateTab(nbParties) {
		let rejoindre = [];
		if (nbParties > 0) {
			for (let i = 0; i < nbParties; i++) {
				let nomPartie = 'Partie ' + (i + 1) + ' - ' + this.nbrJoueurs();
				rejoindre.push(<Button name={nomPartie} />);
			}
		} else {
			rejoindre = ['Pas de partie en cours'];
		}
		rejoindre.push(<Button name="Créer une partie" />);
		return rejoindre;
	}

	render() {
		return (
			<div>
				<List items={this.generateTab(20)} />
			</div>
		);
	}
}

export default Lobby;
