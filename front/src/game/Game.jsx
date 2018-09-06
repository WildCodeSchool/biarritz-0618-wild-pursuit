import React from "react";
import { Link } from "react-router-dom";
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
import CountDownToGame from "./popup/countDownToGame/CountDownToGame.jsx";
import WaitingForPlayers from "./popup/waitingForPlayers/WaitingForPlayers.jsx";
import Question from "./question/Question.jsx";
import StopGame from "./popup/stopGame/StopGame.jsx";
import NameWinner from "./popup/nameWinner/NameWinner.jsx";
import Stats from "./popup/stats/Stats.jsx";

import "./Game.css";

const Game = ({ id, children, dispatch }) => (
  <Grid
    container
    spacing={40}
    justify="center"
    style={{ border: "1px solid black" }}
  >
    <Popup />
    <Grid
      item
      style={{
        width: "15%",
        border: "1px solid blue"
      }}
    >
      <h1>Partie #{id}</h1>
      <Logo />

      <Button
        id="endGame"
        onClick={() => {
          alert("#todo : route vers confirmation arrêt partie");
          dispatch({
            type: "@popup/OPEN",
            payload: { content: <CreateGame /> }
          });
        }}
        name="Arrêter la partie"
      />

      <Dice result={6} alignItems="flex-end" />
    </Grid>
    <Grid
      item
      style={{
        width: "60%",
        border: "1px solid red"
      }}
    >
      <Board />
    </Grid>
    <Grid
      item
      style={{
        width: "25%",
        border: "1px solid pink"
      }}
    >
      <Ranking />
      <Social />
    </Grid>
  </Grid>
);

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
