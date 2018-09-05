import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Button from "./../../../commun/button/Button.jsx";

export default class WaitingForPlayers extends Component {
  constructor() {
    super();
    this.state = {
      playersConnected: 1
    };
    this.playerJoined = this.playerJoined.bind(this);
    this.playerLeft = this.playerLeft.bind(this);
  }

  playerJoined() {
    let playersConnected = this.state.playersConnected + 1;
    this.setState({ playersConnected });
  }
  playerLeft() {
    let playersConnected = this.state.playersConnected - 1;
    this.setState({ playersConnected });
  }
  render() {
    if (this.state.playersConnected === this.props.maxPLayers) {
      alert(
        "Le nombre de joueur attendu a été atteint, le compte a rebours va commencer"
      );
    }
    return (
      <div>
        <h1>En attente de la connexion des joueurs</h1>
        {this.state.playersConnected} sur {this.props.maxPLayers}
        <br />
        <button onClick={this.playerJoined}>(Un joueur se connecte)</button>
        <button onClick={this.playerLeft}>(Un joueur se deconnecte)</button>
        <br />
        <Link to="/game/wait">
          <Button
            onClick={() => {
              alert("#todo : route vers countDownGame");
            }}
            name="Commencer la partie quand même"
            disabled={this.state.playersConnected < 2}
          />
        </Link>
      </div>
    );
  }
}

WaitingForPlayers.propTypes = {
  maxPLayers: PropTypes.number.isRequired
};
