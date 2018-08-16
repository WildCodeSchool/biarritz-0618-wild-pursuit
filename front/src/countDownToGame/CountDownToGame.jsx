import React, { Component } from 'react';
import CountDown from './../countDown/CountDown.jsx';

export default class CountDownToGame extends Component {
	render() {
		return (
			<div>
				<h1>La Partie commence dans</h1>
				<CountDown seconds={this.props.countDown} />
			</div>
		);
	}
}
