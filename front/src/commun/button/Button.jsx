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

const Button = ({
  name,
  variant,
  onClick,
  disabled,
  color = "default",
  disableRipple
}) => (
  <MuiThemeProvider theme={muiTheme}>
    <ButtonMUI {...{ variant, onClick, disabled, color, disableRipple }}>
      {name}
    </ButtonMUI>
  </MuiThemeProvider>
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
