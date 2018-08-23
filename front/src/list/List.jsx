import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items }) => items.map((item, i) => <div key={i}>{item}</div>);

List.propTypes = {
	items: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default List;
