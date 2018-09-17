import React from "react";
import PropTypes from "prop-types";

import BaseButton from "./Button";

const SmileButton = ({ name, variant, onClick }) => (
  <BaseButton
    style={{
      backgroundColor: "rgba(255, 255, 128, 0)",
      fontSize: "2em",
      padding: "0"
    }}
    name={name}
    variant="fab"
    onClick={onClick}
  />
);

SmileButton.propTypes = {
  name: PropTypes.string.isRequired
};

SmileButton.defaultProps = {};

export default SmileButton;
