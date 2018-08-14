import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Ranking from "./ranking/Ranking.jsx";
import Social from "./social/Social.jsx";
import Die from "./Die.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Wild Pursuit</h1>
        <h2>A la recherche de la quête perdue</h2>
        <div>
          <List />
        </div>

        <div>
          <Plateau />
        </div>

        <Ranking />
        <Social />
        <Die />
      </div>
    );
  }
}

export default App;
