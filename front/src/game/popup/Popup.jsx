import React, { Component } from "react";
import PropTypes from "prop-types";
import ButtonMUI from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import "./popup.css";

class Popup extends Component {
  constructor(props) {
    super();
    this.state = { ...props };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <Modal
        open={this.state.open}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          position: "absolute"
        }}
      >
        <Paper elevation="20">
          <Link to="/">
            <ButtonMUI
              onClick={() => {
                this.handleClose();
              }}
            >
              X
            </ButtonMUI>
          </Link>
          <div style={{ padding: "0 50px 50px 50px" }}>{this.state.comp}</div>
        </Paper>
      </Modal>
    );
  }
}

Popup.propTypes = {
  comp: PropTypes.element.isRequired
};

export default Popup;
