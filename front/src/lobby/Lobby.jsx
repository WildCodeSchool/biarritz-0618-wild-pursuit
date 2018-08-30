import React, { Component } from "react";
import Button from "./../atomes/button/Button.jsx";
import List from "./../atomes/list/List.jsx";

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
      return (this.rejoindre[i] = <Button name={name} />);
    });

    if (this.rejoindre.length === 0) {
      this.rejoindre = ["Pas de partie en cours"];
    }

    this.rejoindre.push(<Button name="Créer une partie" />);
  }

  render() {
    return (
      <div>
        <List items={this.rejoindre} />
      </div>
    );
  }
}

export default Lobby;
