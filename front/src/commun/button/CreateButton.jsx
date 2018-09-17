import React from "react";
import PropTypes from "prop-types";

import BaseButton from "./Button";

const CreateButton = ({ name, onClick, bottom }) => (
  <BaseButton
    style={{
      backgroundColor: "#76FF6B",
      width: "25%",
      position: "absolute",
      right: "5%",
      bottom: bottom
    }}
    name={name}
    onClick={onClick}
  />
);

CreateButton.propTypes = {
  name: PropTypes.string.isRequired
};

CreateButton.defaultProps = {};

export default CreateButton;
