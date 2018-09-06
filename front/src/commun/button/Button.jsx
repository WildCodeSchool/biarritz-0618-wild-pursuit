import React from "react";
import PropTypes from "prop-types";
import ButtonMUI from "@material-ui/core/Button";


const Button = ({ name, variant, onClick, disabled }) => (
  <ButtonMUI {...{ variant, onClick, disabled }}>{name}</ButtonMUI>
);

Button.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired
};

Button.defaultProps = {
  variant: "contained",
  onClick: () => console.info("#TODO"),
  disabled: false
};
export default Button;
