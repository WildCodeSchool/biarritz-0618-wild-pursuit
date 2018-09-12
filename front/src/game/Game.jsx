import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import GameButton from "./../commun/button/GameButton.jsx";
import Logo from "./../commun/logo/Logo.jsx";
import Dice from "./dice/Dice.jsx";
import Ranking from "./ranking/Ranking.jsx";
import Social from "./social/Social.jsx";
import Board from "./board/Board.jsx";
import Popup from "./popup/Popup.jsx";
import CreateGame from "./popup/createGame/CreateGame.jsx";
import Question from "./popup/question/Question.jsx";
import StopGame from "./popup/stopGame/StopGame.jsx";
import NameWinner from "./popup/nameWinner/NameWinner.jsx";

import "./Game.css";

class Game extends Component {
  constructor() {
    super();

    this.openQuestion = this.openQuestion.bind(this);
    this.stopGame = this.stopGame.bind(this);
    this.createGame = this.createGame.bind(this);
  }
  openQuestion() {
    this.props.dispatch({
      type: "@popup/OPEN",
      payload: { content: <Question /> }
    });
  }
  createGame() {
    this.props.dispatch({
      type: "@popup/OPEN",
      payload: { content: <CreateGame /> }
    });
  }
  stopGame() {
    this.props.dispatch({
      type: "@popup/OPEN",
      payload: { content: <StopGame /> }
    });
  }
  render() {
    return (
      <Grid id="fondEcranPartie">
        <Grid
          id="gridSize"
          style={{ border: "1px solid black" }}
          container
          justify="center"
        >
          <Popup />
          <Grid id="left" item xs>
            <Logo />
            <h3>Partie #{this.props.id}</h3>

            <GameButton
              id="endGame"
              onClick={() => {
                this.stopGame();
              }}
              name="Arrêter la partie"
            />

            <GameButton
              onClick={() => {
                this.createGame();
              }}
              name="Créer une partie"
            />

            <GameButton
              onClick={() => {
                this.openQuestion();
              }}
              name="Question"
            />

            <div id="dicePosition">
              <Dice result={6} alignItems="flex-end" />
            </div>
          </Grid>
          <Grid id="plateau" item xs={7}>
            <Board />
          </Grid>
          <Grid id="rightGrisBoarder" item xs={3}>
            <Grid id="rank">
              <Ranking />
            </Grid>
            <Social />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Game.propTypes = {
  id: PropTypes.number.isRequired
};

Game.defaultProps = {
  id: 1
};

// function mapStateToProps({ Game }) {
//   return Game;
// }

export default connect(() => ({}))(Game);
