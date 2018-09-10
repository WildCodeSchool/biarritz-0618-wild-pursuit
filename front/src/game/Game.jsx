import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import Button from "./../commun/button/Button.jsx";
import Logo from "./../commun/logo/Logo.jsx";
import Dice from "./dice/Dice.jsx";
import Ranking from "./ranking/Ranking.jsx";
import Social from "./social/Social.jsx";
import Board from "./board/Board.jsx";
import Popup from "./popup/Popup.jsx";
import CreateGame from "./popup/createGame/CreateGame.jsx";
import Question from "./question/Question.jsx";
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
          container
          spacing={40}
          justify="center"

          /* style={{ border: "1px solid black" }} */
        >
          <Popup />
          <Grid
            item
            style={{
              width: "20%",
              padding: "40px"

              /*  border: "1px solid blue" */
            }}
          >
            <Logo />
            <h3>Partie #{this.props.id}</h3>

            <Button
              id="endGame"
              onClick={() => {
                this.stopGame();
              }}
              name="Arrêter la partie"
            />

            <Button
              onClick={() => {
                this.createGame();
              }}
              name="Créer une partie"
            />

            <Button
              onClick={() => {
                this.openQuestion();
              }}
              name="Question"
            />

            <div id="dicePosition">
              <Dice result={6} alignItems="flex-end" />
            </div>
          </Grid>
          <Grid
            id="plateau"
            item
            style={{
              width: "60%"

              /* border: "1px solid red" */
            }}
          >
            <Board />
          </Grid>
          <Grid
            id="rightGrisBoarder"
            item
            style={{
              width: "20%"
              /*  border: "1px solid pink" */
            }}
          >
            <Grid
              id="rank"
              style={{
                background: "#D3D3D3",
                opacity: "50%"
              }}
            >
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
