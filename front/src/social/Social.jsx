import React, { Component } from 'react';
import Button from './../button/Button.jsx';
import List from './../list/List.jsx';

class Social extends Component {
	constructor() {
		super();

		this._TxtInteractions = [
			<Button name="Bravo !" />,
			<Button name="Dommage..." />,
			<Button name="Bien joué !" />,
			<Button name="AHAH" />,
		];
		this._emoInteractions = [
			<Button name="🙂" variant="fab" />,
			<Button name="❤️" variant="fab" />,
			<Button name="😉" variant="fab" />,
			<Button name="😀" variant="fab" />,
			<Button name="☹️" variant="fab" />,
		];
	}

	render() {
		return (
			<div>
				<List items={this._TxtInteractions} />
				<List items={this._emoInteractions} />
			</div>
		);
	}
}

export default Social;
