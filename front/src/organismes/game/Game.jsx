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
  <Grid container spacing={40} justify="center">
    <Grid item style={{
      //border: '1px solid blue'
    }}>
      <h1>Partie #{id}</h1>
      <Logo />
      <Link to="/game/end-game">
        <Button
          onClick={() => {
            alert("#todo : route vers confirmation arrêt partie");
          }}
          name="Arrêter la partie"
        />
      </Link>
      <Dice result={6} 
       alignItems="flex-end"
       style={{
      margin:'2px 5px 2em 0'
    }} />
    </Grid>
    <Grid item style={{
      //border: '1px solid red'
    }}>
      <Board />
      <div>
        {children}  
      </div>
    </Grid>
    <Grid item>
      <Ranking />
      <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
> <Social />
</Grid>
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
