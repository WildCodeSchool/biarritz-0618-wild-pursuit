import React from "react";
import PropTypes from "prop-types";
import ButtonMUI from '@material-ui/core/Button';
//import "./popup.css";

const Popup = ({ comp }) => (
  <div>
    <div  class='popup'>
  <ButtonMUI onClick='fermer le popup' >X</ButtonMUI>
  </div>
    {comp}
  </div>
);

Popup.propTypes = {
  comp: PropTypes.element.isRequired
};

export default Popup;
