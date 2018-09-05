import React, { Component } from "react";
import Button from "./../../../commun/button/Button.jsx";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default class NameWinner extends Component {
  render() {
    return (
      <div>
        <h1>La partie est terminée</h1>
        <p>Le vainqueur de la partie est "NOM DU GAGNANT"</p>
        <div>
          <Link to="/game/stats">
            <Button
              onClick={() => {
                alert("#todo : affichage des statistiques");
              }}
              name="Afficher les statistiques"
            />
          </Link>
        </div>
      </div>
    );
  }
}
