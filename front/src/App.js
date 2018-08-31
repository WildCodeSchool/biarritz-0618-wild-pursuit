import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Lobby from "./lobby/Lobby.jsx";
import Game from "./organismes/game/Game.jsx";
import Popup from "./organismes/popup/Popup.jsx";
import CreateGame from "./molecules/createGame/CreateGame.jsx";
import CountDownToGame from "./atomes/countDownToGame/CountDownToGame.jsx";
import WaitingForPlayers from "./molecules/waitingForPlayers/WaitingForPlayers.jsx";
import Question from "./molecules/question/Question.jsx";
import StopGame from "./molecules/stopGame/StopGame.jsx";
import NameWinner from "./molecules/nameWinner/NameWinner.jsx";

const CreateGamePopup = () => <Popup comp={<CreateGame />} />;
const WaitingForGamePopup = () => (
  <Popup comp={<CountDownToGame countDown={10} />} />
);
const WaitingPlayersPopup = () => (
  <Popup comp={<WaitingForPlayers maxPLayers={8} />} />
);
const QuestionPopup = () => <Popup comp={<Question />} />;
const StopGamePopup = () => <Popup comp={<StopGame />} />;
const WinnerPopup = () => <Popup comp={<NameWinner />} />;

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Lobby} />
            <Game>
              <Route path="/game" component={() => <div> </div>} />
              <Route path="/game/end-game" component={StopGamePopup} />
              <Route path="/game/create" component={CreateGamePopup} />
              <Route path="/game/wait" component={WaitingForGamePopup} />
              <Route path="/game/waitPlayers" component={WaitingPlayersPopup} />
              <Route path="/game/Question" component={QuestionPopup} />
              <Route path="/game/winner" component={WinnerPopup} />
            </Game>
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
