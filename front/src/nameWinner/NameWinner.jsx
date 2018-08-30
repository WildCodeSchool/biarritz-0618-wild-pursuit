import React, { Component } from "react";
import ButtonMUI from "@material-ui/core/Button";

export default class NameWinner extends Component {
  render() {
    return (
      <div>
        <h1>La partie est terminée</h1>
        <p>Le vainqueur de la partie est "NOM DU GAGNANT"</p>
        <div>
          <ButtonMUI onClick='afficher les stats'>
            Afficher les statistiques
          </ButtonMUI>
        </div>
      </div>
    );
  }
}
