import React from 'react';
import PropTypes from 'prop-types';
import ButtonMUI from '@material-ui/core/Button';

const Button = ({ variant = 'contained', action, disabled, name }) => (
	<ButtonMUI variant={variant} onClick={action} disabled={disabled}>
		{name}
	</ButtonMUI>
);

Button.propTypes = {
	variant: PropTypes.string,
	action: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	name: PropTypes.string.isRequired,
};

export default Button;
