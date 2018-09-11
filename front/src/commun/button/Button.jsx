import React from "react";
import PropTypes from "prop-types";
import ButtonMUI from "@material-ui/core/Button";

const Button = ({ name, ...rest }) => <ButtonMUI {...rest}>{name}</ButtonMUI>;

Button.propTypes = {
  name: PropTypes.string.isRequired
};

export default Button;
