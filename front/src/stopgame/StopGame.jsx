import React, { Component } from "react";
import Button from "./../button/Button.jsx";

export default class StopGame extends Component {
  render() {
    return (
      <div>
        <h1>Confirmation</h1>
        <span>
          Vous avez cliquez sur "Arrêter la Partie", est-ce bien ce que vous
          voulez faire ?<br /> Attention, cette action est irréversible !
        </span>

        <Button name="Confirmer" />
        <Button name="Annuler" />
      </div>
    );
  }
}
