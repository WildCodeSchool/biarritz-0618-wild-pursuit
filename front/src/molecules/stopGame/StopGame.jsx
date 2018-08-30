import React, { Component } from "react";
import Button from "./../../atomes/button/Button.jsx";

export default class StopGame extends Component {
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
            alert("#todo : route vers lobby");
          }}
          name="Confirmer"
        />
        <Button
          onClick={() => {
            alert("#todo : fermeture popup, retour partie");
          }}
          name="Annuler"
        />
      </div>
    );
  }
}
