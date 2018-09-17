import React from "react";
import PropTypes from "prop-types";
import ButtonMUI from "@material-ui/core/Button";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const muiTheme = createMuiTheme({
  palette: {
    primary: { main: "#f44336" },
    secondary: {
      main: "#76FF6B"
    }
  }
});

const Button = ({
  name,
  color = "default",
  variant = "contained",
  ...rest
}) => (
  <MuiThemeProvider theme={muiTheme}>
    <ButtonMUI {...rest} color={color} variant={variant}>
      {name}
    </ButtonMUI>
  </MuiThemeProvider>
);

Button.propTypes = {
  name: PropTypes.string.isRequired
};

export default Button;
