import React, { Component } from 'react';

export default class List extends Component {
	constructor() {
		super();
	}

	render() {
		return this.props.items.map(item => {
			return <div key={item}>{item}</div>;
		});
	}
}
