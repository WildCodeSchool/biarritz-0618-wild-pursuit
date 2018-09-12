import React, { Component } from "react";
import Button from "./../../../commun/button/Button.jsx";
import NameWinner from "../nameWinner/NameWinner";
import { connect } from "react-redux";

class StopGame extends Component {
  render() {
    return (
      <div>
        <h1>Confirmation</h1>
        <span>
          Vous avez cliquez sur "Arrêter la Partie", est-ce bien ce que vous
          voulez faire ?<br /> Attention, cette action est irréversible !
        </span>

        <Button
          onClick={() => {
            //alert("#todo : route vers lobby");
            this.props.dispatch({
              type: "@popup/OPEN",
              payload: { content: <NameWinner /> }
            });
          }}
          name="Confirmer"
        />

        <Button
          onClick={() => {
            //alert("#todo : fermeture popup, retour partie");
            this.props.dispatch({
              type: "@popup/CLOSE"
            });
          }}
          name="Annuler"
        />
      </div>
    );
  }
}

export default connect(() => ({}))(StopGame);
