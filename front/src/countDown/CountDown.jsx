import React, { Component } from 'react';

class CountDown extends Component {
	constructor(props) {
		super();
		this.state = { ...props, time: this.secondsToTime(props.seconds) };
		this._timer = 0;
		this.startTimer = this.startTimer.bind(this);
		this.countDown = this.countDown.bind(this);
		this.display = this.display.bind(this);
	}

	componentDidMount() {
		this.startTimer();
	}
	startTimer() {
		if (this._timer == 0) {
			this._timer = setInterval(this.countDown, 1000);
		}
	}

	secondsToTime(secs) {
		let divisor_for_minutes = secs % (60 * 60);
		let minutes = Math.floor(divisor_for_minutes / 60);

		let divisor_for_seconds = divisor_for_minutes % 60;
		let seconds = Math.ceil(divisor_for_seconds);

		let obj = {
			m: minutes,
			s: seconds,
		};
		return obj;
	}
	countDown() {
		// Remove one second, set state so a re-render happens.
		let seconds = this.state.seconds - 1;
		this.setState({
			time: this.secondsToTime(seconds),
			seconds: seconds,
		});

		// Check if we're at zero.
		if (seconds == 0) {
			clearInterval(this._timer);
			alert('Le compte à rebours est fini !');
		}
	}
	display() {
		let displayTime = '';
		if (this.state.time.m != 0) {
			displayTime = displayTime + this.state.time.m + ' Min ';
		}
		displayTime = displayTime + this.state.time.s + ' Sec';
		return displayTime;
	}
	render() {
		return <div>⏱ {this.display()}</div>;
	}
}

export default CountDown;
