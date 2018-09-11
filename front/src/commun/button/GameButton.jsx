import React from "react";
import PropTypes from "prop-types";

import BaseButton from "./Button";

const GameButton = ({ name, onClick }) => (
  <BaseButton
    style={{
      backgroundColor: "#d3d3d3",
      width: "100%"
    }}
    name={name}
    onClick={onClick}
  />
);

GameButton.propTypes = {
  name: PropTypes.string.isRequired
};

GameButton.defaultProps = {};

export default GameButton;
