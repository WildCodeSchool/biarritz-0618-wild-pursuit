import React, { Component } from 'react';

import CountDown from './../countDown/CountDown.jsx';
import List from './../list/List.jsx';
import Button from './../button/Button.jsx';
import { question, aCase } from './../App.dummyDatas.js';

export default class Question extends Component {
	constructor() {
		super();
		this.question = question; //TODO Récupérer la question du backend
		this.case = aCase; //TODO Récupérer la case sur lequel est le pion du backend
		this.answers = [];
		this.question.answers.map(answer => {
			return this.answers.push(<Button name={answer} />);
		});
	}

	render() {
		let displayCatCheese = `Une question de la catégorie ${
			this.case.couleur
		} : ${this.question.theme}`;
		if (this.case.cheese) {
			displayCatCheese += ' pour un Camembert !';
		}
		return (
			<div>
				<CountDown seconds={60} />
				<h1>A vous de jouer !</h1>
				<h2>{displayCatCheese}</h2>
				<p>{this.question.question}</p>
				<List items={this.answers} />
			</div>
		);
	}
}
