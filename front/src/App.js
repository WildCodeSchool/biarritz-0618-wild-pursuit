import React, { Component } from "react";
import "./App.css";

import Ranking from "./ranking/Ranking.jsx";
import Social from "./social/Social.jsx";
import Dice from "./dice/Dice.jsx";
import CountDown from "./countDown/CountDown.jsx";
import Plateau from "./Plateau.jsx";
import CreateGame from "./createGame/CreateGame.jsx";
import Lobby from "./Lobby.jsx";
import CountDownToGame from "./countDownToGame/CountDownToGame.jsx";
import WaitingForPlayers from "./waitingForPlayers/WaitingForPlayers.jsx";
import Question from "./question/Question.jsx";
import Popup from "./popup/Popup.jsx";
import StopGame from "./stopgame/StopGame.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dice result={3} />
        <h1>Wild Pursuit</h1>
        <h2>A la recherche de la quête perdue</h2>
        <Lobby />
        <Ranking />
        <Social />
        <Plateau />
        <Popup comp={<CreateGame />} />
        <Popup comp={<CountDownToGame countDown={10} />} />
        <Popup comp={<WaitingForPlayers maxPLayers={8} />} />
        <Popup comp={<Question />} />
        <Popup comp={<StopGame />} />
      </div>
    );
  }
}

export default App;
