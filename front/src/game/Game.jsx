import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import "./game.css";

import Button from "./../button/Button.jsx";
import Dice from "./../dice/Dice.jsx";
import Ranking from "./../ranking/Ranking.jsx";
import Social from "./../social/Social.jsx";
import Board from "./../board/Board.jsx";
import Popup from "./../popup/Popup.jsx";
import CreateGame from "./../createGame/CreateGame.jsx";
import CountDownToGame from "./../countDownToGame/CountDownToGame.jsx";
import WaitingForPlayers from "./../waitingForPlayers/WaitingForPlayers.jsx";
import Question from "./../question/Question.jsx";
import StopGame from "./../stopgame/StopGame.jsx";
import NameWinner from "./../nameWinner/NameWinner.jsx";

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
          action={() => {
            alert("#todo : route vers confirmation arrêt partie");
          }}
          name="Arrêter la partie"
        />
        <Dice result={25} />
        <Ranking />
        <Social />
        <Board />
        <Paper id="createGame" elevation={14} style={{ margin: 32 }}>
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
