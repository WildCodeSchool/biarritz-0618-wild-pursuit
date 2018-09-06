import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Lobby from "./lobby/Lobby.jsx";
import Game from "./game/Game.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Lobby} />
            <Route path="/game" component={Game} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
