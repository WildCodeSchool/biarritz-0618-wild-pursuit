import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";

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

const Game = ({ id }) => (
  <div className="game">
    Partie #{id}
    <br />
    <Link to="/game/endGame">
      <Button
        onClick={() => {
          alert("#todo : route vers confirmation arrêt partie");
        }}
        name="Arrêter la partie"
      />
    </Link>
    <Dice result={25} />
    <Ranking />
    <Social />
    <Board />
    <BrowserRouter>
      <Switch>
        <Route path="/game/create" component={CreateGamePopup} />
        <Route path="/game/wait" component={WaitingForGamePopup} />
        <Route path="/game/waitPlayers" component={WaitingPlayersPopup} />
        <Route path="/game/Question" component={QuestionPopup} />
        <Route path="/game/endGame" component={StopGamePopup} />
        <Route path="/game/winner" component={WinnerPopup} />
      </Switch>
    </BrowserRouter>
  </div>
);

Game.propTypes = {
  id: PropTypes.number.isRequired
};

Game.defaultProps = {
  id: 1
};

export default Game;
