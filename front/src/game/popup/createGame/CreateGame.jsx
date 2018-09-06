import React, { Component } from "react";
import Slider from "@material-ui/lab/Slider";
import Switch from "@material-ui/core/Switch";
import { Link } from "react-router-dom";

import Button from "./../../../commun/button/Button.jsx";

export default class CreateGame extends Component {
  constructor() {
    super();
    this.state = {
      value: 4,
      checkedA: true,
      checkedB: false,
      checkedC: false,
      countDown: 10
    };
    // this.handleCreateGame = this.handleCreateGame.bind(this);
  }
  handleSlider = (event, value) => {
    this.setState({ value });
  };

  handleSwitch = name => event => {
    if (event.target.checked) {
      this.setState({
        checkedA: false,
        checkedB: false,
        checkedC: false
      });
      this.setState({ [name]: event.target.checked });
      switch (name) {
        case "checkedA":
          this.setState({ countDown: 10 });
          break;
        case "checkedB":
          this.setState({ countDown: 60 });
          break;
        case "checkedC":
          this.setState({ countDown: 180 });
          break;
      }
    }
  };

  handleCreateGame = (nbPLayers, countDown) => {
    alert(
      "Nombre de joueurs de la partie : " +
        nbPLayers +
        "\n" +
        "Compte à rebours avant la partie : " +
        countDown
    );
  };
  render() {
    return (
      <div>
        <h1>Créer une Partie</h1>
        <div>
          <div>
            Nombre de joueurs: <br />2{" "}
            <Slider
              value={this.state.value}
              min={2}
              max={6}
              step={1}
              onChange={this.handleSlider}
              width={300}
            />{" "}
            {this.state.value}
          </div>
          <div>
            Compte à rebour avant partie :<br />
            10 Secondes
            <Switch
              checked={this.state.checkedA}
              onChange={this.handleSwitch("checkedA")}
              value="checkedA"
            />
            1 Minute
            <Switch
              checked={this.state.checkedB}
              onChange={this.handleSwitch("checkedB")}
              value="checkedA"
            />
            3 Minutes
            <Switch
              checked={this.state.checkedC}
              onChange={this.handleSwitch("checkedC")}
              value="checkedA"
            />
          </div>
          <Link to="/game/waitPlayers">
            <Button
              onClick={() => {
                this.handleCreateGame(this.state.value, this.state.countDown);
              }}
              name="Créer la partie"
            />
          </Link>
        </div>
      </div>
    );
  }
}
