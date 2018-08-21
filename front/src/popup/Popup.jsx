import React from 'react';
import PropTypes from 'prop-types';

const Popup = ({ comp }) => <div>{comp}</div>;

Popup.propTypes = {
	comp: PropTypes.element.isRequired,
};

export default Popup;
