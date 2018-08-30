import React, { Component } from "react";

import Button from "./../button/Button.jsx";
import Dice from "./../dice/Dice.jsx";
import Ranking from "./../ranking/Ranking.jsx";
import Social from "./../social/Social.jsx";
import Plateau from "./../Plateau.jsx";
import Popup from "./../popup/Popup.jsx";
import CreateGame from "./../createGame/CreateGame.jsx";
import CountDownToGame from "./../countDownToGame/CountDownToGame.jsx";
import WaitingForPlayers from "./../waitingForPlayers/WaitingForPlayers.jsx";
import Question from "./../question/Question.jsx";
import StopGame from "./../stopGame/StopGame.jsx";
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
        <Button name="Arrêter la partie" />
        <Dice result={25} />
        <Ranking />
        <Social />
        <Plateau />
        <Popup comp={<CreateGame />} />
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
