import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Lobby from "./lobby/Lobby.jsx";
import Game from "./organismes/game/Game.jsx";

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
        {/*  <Router>
          <Link to="/">
            <h1>Wild Pursuit</h1>
            <h2>A la recherche de la quête perdue</h2>
            <Lobby />
          </Link>
          <Link to="/game">
            <Game id={2156} />
          </Link>
        </Router> */}
      </div>
    );
  }
}

export default App;
