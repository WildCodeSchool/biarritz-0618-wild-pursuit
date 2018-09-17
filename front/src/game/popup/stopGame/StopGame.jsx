import React, { Component } from "react";
import StopButton from "./../../../commun/button/StopButton.jsx";
import NameWinner from "../nameWinner/NameWinner";
import { connect } from "react-redux";

import "./StopGame.css";

class StopGame extends Component {
  render() {
    return (
      <div id="contain">
        <h1>Confirmation</h1>
        <div id="containTwo">
          Vous avez cliqué sur "Arrêter la Partie", est-ce bien ce que vous
          voulez faire ?<br />
          Attention, cette action est irréversible !
          <StopButton
            color="#76FF6B"
            right="31%"
            onClick={() => {
              this.props.dispatch({
                type: "@popup/OPEN",
                payload: { content: <NameWinner /> }
              });
            }}
            name="Confirmer"
          />
          <StopButton
            color="#f44336"
            right="5%"
            onClick={() => {
              this.props.dispatch({ type: "@popup/CLOSE" });
            }}
            name="Annuler"
          />
        </div>
      </div>
    );
  }
}

export default connect(() => ({}))(StopGame);
