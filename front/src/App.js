import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import List from "./List";
import Plateau from "./Plateau";

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
      </div>
    );
  }
}

export default App;
