import React, { Component } from "react";
import Slider from "@material-ui/lab/Slider";
import Switch from "@material-ui/core/Switch";

import Button from "./../../atomes/button/Button.jsx";

export default class CreateGame extends Component {
  constructor() {
    super();
    this.state = {
      value: 4,
      checkedA: true,
      checkedB: false,
      checkedC: false
    };
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
    }
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
          <Button
            action={() => {
              alert("#todo : route vers attente de la connexion des joueurs");
            }}
            name="Créer la partie"
          />
        </div>
      </div>
    );
  }
}
