import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Button from "./../../atomes/button/Button.jsx";
import Dice from "./../../atomes/dice/Dice.jsx";
import Ranking from "./../../molecules/ranking/Ranking.jsx";
import Social from "./../../molecules/social/Social.jsx";
import Board from "./../../molecules/board/Board.jsx";
import Popup from "./../popup/Popup.jsx";
import CreateGame from "./../../molecules/createGame/CreateGame.jsx";
import CountDownToGame from "./../../atomes/countDownToGame/CountDownToGame.jsx";
import WaitingForPlayers from "./../../molecules/waitingForPlayers/WaitingForPlayers.jsx";
import Question from "./../../molecules/question/Question.jsx";
import StopGame from "./../../molecules/stopGame/StopGame.jsx";
import NameWinner from "./../../molecules/nameWinner/NameWinner.jsx";

class Game extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="game">
        Partie #{this.props.id}
        <br />
        <Button
          onClick={() => {
            alert("#todo : route vers confirmation arrêt partie");
          }}
          name="Arrêter la partie"
        />
        <Dice result={25} />
        <Ranking />
        <Social />
        <Board />
        <BrowserRouter>
          <Switch>
            <Route
              path="/game/createGame"
              component={<Popup comp={<CreateGame />} />}
            />
          </Switch>
        </BrowserRouter>
        {/* <Popup comp={<CreateGame />} /> */}
        <Popup comp={<CountDownToGame countDown={10} />} />
        <Popup comp={<WaitingForPlayers maxPLayers={8} />} />
        <Popup comp={<Question />} />
        <Popup comp={<StopGame />} />
        <Popup comp={<NameWinner />} />
      </div>
    );
  }
}

export default Game;
