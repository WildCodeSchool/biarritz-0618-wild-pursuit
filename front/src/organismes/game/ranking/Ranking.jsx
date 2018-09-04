import React, { Component } from 'react';
import { players } from './../../../App.dummyDatas.js';
import "./ranking.css";

class Ranking extends Component {
  constructor() {
    super();
    this._players = players; //TODO récupérer les jouurs de la partie et le nombre de camemberts

    this._players.sort((a, b) => {
      return a.cheeseCount < b.cheeseCount ? 1 : -1;
    });
  }

	render() {
		return (
			<table id="containerRank">
				<thead>
					<tr id="title">
						<td colSpan="2">Classement <img src={require('./../../../commun/images/trophy.png')}  width = "30" height = "25" /></td>
					</tr>
				</thead>
				<br/>
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
