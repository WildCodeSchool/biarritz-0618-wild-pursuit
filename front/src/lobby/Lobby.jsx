import React, { Component } from "react";
import Button from "./../commun/button/Button.jsx";
import List from "./../commun/list/List.jsx";
import { Link } from "react-router-dom";

import { generateDummyGames } from "./../App.dummyDatas.js";

class Lobby extends Component {
  constructor() {
    super();
    this.rejoindre = generateDummyGames(6);

    this.rejoindre.sort((a, b) => {
      return a.id > b.id ? 1 : -1;
    });

    this.rejoindre.map((partie, i) => {
      let name =
        "Partie #" +
        partie.id +
        " - " +
        partie.connectedPlayers +
        "/" +
        partie.maxPlayers;
      let path = "/game/" + partie.id;
      return (this.rejoindre[i] = (
        <Link to={path}>
          <Button
            onClick={() => {
              this.joinGame(partie.id);
            }}
            name={name}
          />
        </Link>
      ));
    });

    if (this.rejoindre.length === 0) {
      this.rejoindre = ["Pas de partie en cours"];
    }

    this.rejoindre.push(
      <Link to="/game/">
        <Button
          onClick={() => {
            this.createGame();
          }}
          name="Créer une partie"
        />
      </Link>
    );

    this.joinGame = this.joinGame.bind(this);
    this.createGame = this.createGame.bind(this);
  }

  joinGame(id) {
    alert("Rejoindre la partie #" + id);
  }

  createGame() {
    alert("Créer une partie");
  }

  render() {
    return (
      <div>
        <h1>Wild Pursuit</h1>
        <h2>A la recherche de la quête perdue</h2>
        <List items={this.rejoindre} />
      </div>
    );
  }
}

export default Lobby;
