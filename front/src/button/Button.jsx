import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ action, disabled, name }) => (
	<button onClick={action} disabled={disabled}>
		{name}
	</button>
);

Button.propTypes = {
	action: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	name: PropTypes.string.isRequired,
};

export default Button;
