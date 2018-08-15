import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Ranking from "./ranking/Ranking.jsx";
import Social from "./social/Social.jsx";
import Die from "./Die.js";
import Lobby from "./Lobby.jsx";
import Plateau from "./Plateau.jsx";
import CountDown from "./countDown/CountDown.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Wild Pursuit</h1>
        <h2>A la recherche de la quête perdue</h2>
        <div>
          <Lobby />
        </div>

        <div>
          <Plateau />
        </div>

        <Ranking />
        <Social />
        <CountDown seconds="65" />
        <Plateau />
        <Die />
      </div>
    );
  }
}

export default App;
