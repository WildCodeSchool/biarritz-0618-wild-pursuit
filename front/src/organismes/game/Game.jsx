import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Button from "./../../atomes/button/Button.jsx";
import Dice from "./../../atomes/dice/Dice.jsx";
import Ranking from "./../../molecules/ranking/Ranking.jsx";
import Social from "./../../molecules/social/Social.jsx";
import Board from "./../../molecules/board/Board.jsx";
import Logo from "./../../atomes/logo/Logo.jsx";

const Game = ({ id, children }) => (
  <div className="game">
    Partie #{id}
    <br />
    <Logo />
    <Grid contenair item xs={2}>
    <Paper>
    <Ranking />
    </Paper>
    </Grid>
    <Grid contenair item xs={3}>
    <Paper>
    <Social />
    </Paper>
    </Grid>
    <Board />
    <Dice result={25} />
   
    <div>
      {children}
      <Link to="/game/end-game">
        <Button
          onClick={() => {
            alert("#todo : route vers confirmation arrêt partie");
          }}
          name="Arrêter la partie"
        />
      </Link>
      {/*  <Switch>
          <Route path="/game/end-game" component={StopGamePopup} />
          <Route path="/game/create" component={CreateGamePopup} />
          <Route path="/game/wait" component={WaitingForGamePopup} />
          <Route path="/game/waitPlayers" component={WaitingPlayersPopup} />
          <Route path="/game/Question" component={QuestionPopup} />
          <Route path="/game/winner" component={WinnerPopup} />
        </Switch> */}
    </div>
    {/* </BrowserRouter> */}
  </div>
);

Game.propTypes = {
  id: PropTypes.number.isRequired
};

Game.defaultProps = {
  id: 1
};

export default Game;
