import React from "react";
import PropTypes from "prop-types";

import BaseButton from "./Button";

const XButton = ({ name, onClick }) => (
  <BaseButton
    style={{
      backgroundColor: "#D3D3D3",
      fontSize: "1em",
      position: "absolute",
      right: "0"
    }}
    name={name}
    onClick={onClick}
  />
);

XButton.propTypes = {
  name: PropTypes.string.isRequired
};

XButton.defaultProps = {};

export default XButton;
