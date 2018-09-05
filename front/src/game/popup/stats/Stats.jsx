import React, { Component } from "react";
import Button from "./../../../commun/button/Button.jsx";

export default class Stats extends Component {
  render() {
    return (
      <div>
        <h1>
          Voici quelques statistiques de la partie que vous venez de jouer
        </h1>
        <p>Durée totale : "DUREE DE LA PARTIE"</p>
        <div>
          <Button
            onClick={() => {
              alert("#todo : revenir au Lobby");
            }}
            name="Revenir au Lobby"
          />
        </div>
      </div>
    );
  }
}
