import React, { Component } from "react";
import StopButton from "./../../../commun/button/StopButton.jsx";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Stats from "./../stats/Stats.jsx";

import "./NameWinner.css";

class NameWinner extends Component {
  handleClose() {
    this.props.dispatch({
      type: "@popup/CLOSE"
    });
  }

  render() {
    return (
      <div id="containWin">
        <h1>La partie est terminée</h1>
        <p>Le vainqueur de la partie est "Chacal"</p>
        <div id="button">
          <Link to="/">
            <StopButton
              right="5%"
              onClick={() => {
                this.handleClose();
              }}
              name="Revenir au Lobby"
            />
          </Link>
          <StopButton
            color="#76FF6B"
            right="31%"
            onClick={() => {
              this.props.dispatch({
                type: "@popup/OPEN",
                payload: { content: <Stats /> }
              });
            }}
            name="Afficher les statistiques"
          />
        </div>
      </div>
    );
  }
}

export default connect(() => ({}))(NameWinner);
