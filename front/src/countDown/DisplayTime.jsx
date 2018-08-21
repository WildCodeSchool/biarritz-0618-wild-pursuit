import React, { Component } from 'react';

class DisplayTime extends Component {
	render() {
		let displayTime = '';
		if (this.props.time.minutes !== 0) {
			displayTime = displayTime + this.props.time.minutes + ' Min ';
		}
		displayTime = displayTime + this.props.time.seconds + ' Sec';

		return <span>{displayTime}</span>;
	}
}

export default DisplayTime;
