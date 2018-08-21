import React, { Component } from 'react';

class Ranking extends Component {
	constructor() {
		super();
		//on génère des dummy participants pour les afficher, il faudra definir la récupération des joueurs
		this._players = [
			{ nickname: 'Marmotte', cheeseCount: 3 },
			{ nickname: 'Ratatas', cheeseCount: 0 },
			{ nickname: 'Alpaga', cheeseCount: 2 },
			{ nickname: 'Chameau des Alpes', cheeseCount: 5 },
		];

		this._players.sort((a, b) => {
			return a.cheeseCount < b.cheeseCount ? 1 : -1;
		});
	}

	render() {
		return (
			<table>
				<thead>
					<tr>
						<td colSpan="2">Classement</td>
					</tr>
				</thead>
				<tbody>
					{this._players.map((player, i) => {
						return (
							<tr key={i}>
								<td>{player.cheeseCount}</td>
								<td>{player.nickname}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}

export default Ranking;
