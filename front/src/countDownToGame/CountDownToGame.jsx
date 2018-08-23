import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

CountDownToGame.propTypes = {
	countDown: PropTypes.number.isRequired,
};
