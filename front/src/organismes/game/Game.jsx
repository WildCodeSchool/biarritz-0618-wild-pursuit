import React, { Component } from "react";
import { Paper } from "@material-ui/core";

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
        <Button name="Arrêter la partie" />
        <Dice result={25} />
        <Ranking />
        <Social />
        <Board />
        <Paper elevation={14} style={{ margin: 32 }}>
          <Popup comp={<CreateGame />} />
        </Paper>
        <Paper elevation={14} style={{ margin: 32 }}>
          <Popup comp={<CountDownToGame countDown={10} />} />
        </Paper>
        <Paper elevation={14} style={{ margin: 32 }}>
          <Popup comp={<WaitingForPlayers maxPLayers={8} />} />
        </Paper>
        <Paper elevation={14} style={{ margin: 32 }}>
          <Popup comp={<Question />} />
        </Paper>
        <Paper elevation={14} style={{ margin: 32 }}>
          <Popup comp={<StopGame />} />
        </Paper>
        <Paper elevation={14} style={{ margin: 32 }}>
          <Popup comp={<NameWinner />} />
        </Paper>
      </div>
    );
  }
}

export default Game;
