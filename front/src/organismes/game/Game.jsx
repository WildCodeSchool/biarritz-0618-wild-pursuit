import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Button from "./../../atomes/button/Button.jsx";
import Dice from "./../../atomes/dice/Dice.jsx";
import Ranking from "./../../molecules/ranking/Ranking.jsx";
import Social from "./../../molecules/social/Social.jsx";
import Board from "./../../molecules/board/Board.jsx";
import Logo from "./../../atomes/logo/Logo.jsx";
import "./Game.css";

const Game = ({ id, children }) => (
  <Grid
    container
    spacing={40}
    justify="center"
    style={{ border: "1px solid black" }}
  >
    <div class="paper">{children}</div>
    <Grid
      item
      style={{
        width: "15%",
        border: "1px solid blue"
      }}
    >
      <h1>Partie #{id}</h1>
      <Logo />
      <Link to="/game/end-game">
        <Button
          id="endGame"
          /*  onClick={() => {
            alert("#todo : route vers confirmation arrêt partie");
          }} */
          name="Arrêter la partie"
        />
      </Link>
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

export default Game;
