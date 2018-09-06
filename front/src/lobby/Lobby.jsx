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
      let path = "/game/" + partie.id;
      return (this.rejoindre[i] = (
<<<<<<< HEAD
        <Link to={path}>
          <Button
=======
        <Link to="/game/wait">
          <Button  id='button'
>>>>>>> cb5e9c2dd46195034cf3f46c468160a4ec71c8c4
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
<<<<<<< HEAD
      <Link to="/game/">
        <Button
=======
      <Link to="/game/create">
        <Button id='button'
>>>>>>> cb5e9c2dd46195034cf3f46c468160a4ec71c8c4
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
      <div id='fondEcran'> 
      <div>
         <img id='logo' src={require("./../commun/images/logoWP.png")}  />
        <h3 id='typo'> Crée ou rejoins une équipe de wildeurs !   </h3>
        <br/>
        <List items={this.rejoindre} />
        </div>
      </div>
    );
  }
}

export default Lobby;
