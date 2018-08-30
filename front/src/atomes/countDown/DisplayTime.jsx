import React, { Component } from 'react';

import PropTypes from 'prop-types';

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

DisplayTime.propTypes = {
	time: PropTypes.shape({
		seconds: PropTypes.number.isRequired,
		minutes: PropTypes.number.isRequired,
	}).isRequired,
};

export default DisplayTime;
