import React, { Component } from "react";
import Button from "./../commun/button/Button.jsx";
import List from "./../commun/list/List.jsx";
import { Link } from "react-router-dom";

import { generateDummyGames } from "./../App.dummyDatas.js";
import './lobby.css';

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
      return (this.rejoindre[i] = (
        <Link to="/game/wait">
          <Button  id='button'
            onClick={() => {
              alert("#todo : route vers attente de la connexion des joueurs");
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
      <Link to="/game/create">
        <Button id='button'
          onClick={() => {
            alert("#todo : route vers créer partie");
          }}
          name="Créer une partie"
        />
      </Link>
    );
  }

  render() {
    return (
      <div id='fondEcran'> 
      <div>
         <img id='logo' src={require("./../commun/images/logoWP.png")}  />
        <h3 id='typo'> Crées ou rejoinds une équipe de wildeur !   </h3>
        <br/>
        <List items={this.rejoindre} />
        </div>
      </div>
    );
  }
}

export default Lobby;
