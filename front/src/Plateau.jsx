import React, { Component } from 'react';

export default class Plateau extends Component {
	constructor() {
		super();
		this.cases = [
			{ caseNorm: 'Case normale' },
			{ caseCam: 'Case camembert' },
			{ caseCent: 'Case centrale' },
			{ caseReplay: 'Case rejouer' },
		];
	}

	generateDiv() {
		let plateau = [];
		for (let laCase = 0; laCase < this.cases.length; laCase++) {
			plateau.push(<div key={laCase}>{laCase}</div>);
		}
		return plateau;
	}

	render() {
		return <div>{this.generateDiv()}</div>;
	}
}
