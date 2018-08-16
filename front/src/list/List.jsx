import React, { Component } from 'react';

export default class List extends Component {
	render() {
		let i = -1;
		return this.props.items.map(item => {
			i++;
			return <div key={i}>{item}</div>;
		});
	}
}
