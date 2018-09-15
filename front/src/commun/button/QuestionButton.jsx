import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";

const QuestionButton = ({ name, onClick, bottom }) => (
  <Button
    style={{
      width: "25%",
      position: "absolute",
      bottom: bottom
    }}
    name={name}
    onClick={onClick}
  />
);

QuestionButton.propTypes = {
  name: PropTypes.string.isRequired
};

QuestionButton.defaultProps = {};

export default QuestionButton;
