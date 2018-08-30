import React from "react";
import PropTypes from "prop-types";
import ButtonMUI from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
//import "./popup.css";

const Popup = ({ comp }) => (
  <div>
    <Paper elevation={14} style={{ margin: 32 }}>
      <div>
        <ButtonMUI
          onClick={() => {
            alert("#todo : fermeture de la popup");
          }}
        >
          X
        </ButtonMUI>
      </div>
      {comp}
    </Paper>
  </div>
);

Popup.propTypes = {
  comp: PropTypes.element.isRequired
};

export default Popup;
