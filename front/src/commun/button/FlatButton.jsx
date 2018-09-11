import React from "react";
import PropTypes from "prop-types";

import BaseButton from "./Button";

const FlatButton = ({ name, onClick, marginTop }) => (
  <BaseButton
    style={{
      backgroundColor: "#d3d3d3",
      width: "25%",
      marginTop: marginTop
    }}
    name={name}
    onClick={onClick}
  />
);

FlatButton.propTypes = {
  name: PropTypes.string.isRequired
};

FlatButton.defaultProps = {
  marginTop: "0"
};

export default FlatButton;
