import React, { Component } from "react";
import "./App.css";

import Lobby from "./lobby/Lobby.jsx";
import Game from "./game/Game.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Wild Pursuit</h1>
        <h2>A la recherche de la quête perdue</h2>
        <Lobby />
        <Game id={2156} />
      </div>
    );
  }
}

export default App;
