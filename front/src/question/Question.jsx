import React, { Component } from 'react';

import CountDown from './../countDown/CountDown.jsx';
import List from './../list/List.jsx';
import Button from './../button/Button.jsx';

export default class Question extends Component {
	constructor() {
		super();
		this.question = {
			theme: 'Géographie',
			question: 'Quelle est la capitale de la France',
			correctAnswer: 'Paris',
			answers: ['Bayonne', 'Paris', 'Bordeaux', 'Londres'],
		};
		this.case = {
			couleur: 'Rouge',
			cheese: true,
		};
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
