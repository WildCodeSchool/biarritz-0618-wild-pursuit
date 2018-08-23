import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { decomposeToMinutesAndSecs } from './CountDown.helper.js';
import DisplayTime from './DisplayTime.jsx';

class CountDown extends Component {
	constructor(props) {
		super();
		this.state = {
			...props,
			time: decomposeToMinutesAndSecs(props.seconds),
		};
		this._timer = 0;
		this.startTimer = this.startTimer.bind(this);
		this.countDown = this.countDown.bind(this);
	}

	componentDidMount() {
		this.startTimer();
	}

	startTimer() {
		if (this._timer === 0) {
			this._timer = setInterval(this.countDown, 1000);
		}
	}

	countDown() {
		// Remove one second, set state so a re-render happens.
		let seconds = this.state.seconds - 1;
		this.setState({
			time: decomposeToMinutesAndSecs(seconds),
			seconds: seconds,
		});

		// Check if we're at zero.
		if (seconds === 0) {
			clearInterval(this._timer);
			//alert('Le compte à rebours est fini !'); //TODO CallBack
		}
	}

	render() {
		return (
			<div>
				⏱ <DisplayTime time={this.state.time} />
			</div>
		);
	}
}

CountDown.propTypes = {
	seconds: PropTypes.number.isRequired,
};

export default CountDown;
