import React from "react";
import PropTypes from "prop-types";

import BaseButton from "./Button";

const StopButton = ({ name, onClick, color, right }) => (
  <BaseButton
    style={{
      backgroundColor: color,
      width: "25%",
      position: "absolute",
      right: right,
      bottom: "0"
    }}
    name={name}
    onClick={onClick}
  />
);

StopButton.propTypes = {
  name: PropTypes.string.isRequired
};

StopButton.defaultProps = {};

export default StopButton;
