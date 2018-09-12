import React from "react";
import PropTypes from "prop-types";
import ButtonMUI from "@material-ui/core/Button";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const muiTheme = createMuiTheme({
  palette: {
    primary: { main: "#f44336" },
    secondary: {
      main: "#689f38"
    }
  }
});

const Button = ({ name, color = "default", ...rest }) => (
  <MuiThemeProvider theme={muiTheme}>
    <ButtonMUI {...rest}>{name}</ButtonMUI>
  </MuiThemeProvider>
);

Button.propTypes = {
  name: PropTypes.string.isRequired
};

export default Button;
