import React from "react";
import PropTypes from "prop-types";

const List = ({ items, itemStyle }) =>
  items.map((item, i) => (
    <div style={itemStyle} key={i}>
      {item}
    </div>
  ));

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  itemStyle: PropTypes.object
};

List.defaultProps = {
  itemStyle: {}
};

export default List;
