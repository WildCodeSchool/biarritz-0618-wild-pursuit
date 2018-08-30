import React from "react";
import PropTypes from "prop-types";
import ButtonMUI from "@material-ui/core/Button";
//import "./popup.css";

const Popup = ({ comp }) => (
  <div>
    <div class="popup">
      <ButtonMUI onClick="fermer le popup">X</ButtonMUI>
    </div>
    {comp}
    <div>
      <ButtonMUI
        onClick={() => {
          alert("#todo : fermeture de la popup");
        }}
      >
        X
      </ButtonMUI>
    </div>
  </div>
);

Popup.propTypes = {
  comp: PropTypes.element.isRequired
};

export default Popup;
