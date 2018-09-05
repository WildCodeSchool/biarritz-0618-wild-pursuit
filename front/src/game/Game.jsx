import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import Button from "./../commun/button/Button.jsx";
import Logo from "./../commun/logo/Logo.jsx";
import Dice from "./dice/Dice.jsx";
import Ranking from "./ranking/Ranking.jsx";
import Social from "./social/Social.jsx";
import Board from "./board/Board.jsx";
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
