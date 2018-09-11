import React, { Component } from "react";
import Slider from "@material-ui/lab/Slider";
import Switch from "@material-ui/core/Switch";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CreateButton from "./../../../commun/button/CreateButton.jsx";
import WaitingForPlayers from "./../waitingForPlayers/WaitingForPlayers.jsx";

import "./CreateGame.css";

class CreateGame extends Component {
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
    this.props.dispatch({
      type: "@popup/CHANGE",
      payload: { content: <WaitingForPlayers /> }
    });
  };
  render() {
    return (
      <div id="contain">
        <h1>Créer une Partie</h1>
        <div id="containTwo">
          <div id="slider">
            <h2> Nombre de joueurs:</h2>
            <div id="sliderTwo">
              <span>2 </span>
              <Slider
                value={this.state.value}
                min={2}
                max={6}
                step={1}
                onChange={this.handleSlider}
              />{" "}
              <span>{this.state.value}</span>
            </div>
          </div>
          <div id="switch">
            <h2>Compte à rebour avant partie :</h2>
            <div id="switchTwo">
              <div class="timer">
                <div class="timertext">10 Secondes</div>
                <Switch
                  checked={this.state.checkedA}
                  onChange={this.handleSwitch("checkedA")}
                  value="checkedA"
                />
              </div>
              <div class="timer">
                <div class="timertext">1 Minute</div>
                <div>
                  <Switch
                    checked={this.state.checkedB}
                    onChange={this.handleSwitch("checkedB")}
                    value="checkedA"
                  />
                </div>
              </div>
              <div class="timer">
                <div class="timertext"> 3 Minutes</div>
                <Switch
                  checked={this.state.checkedC}
                  onChange={this.handleSwitch("checkedC")}
                  value="checkedA"
                />
              </div>
            </div>
          </div>
          <CreateButton
            variant="contained"
            color="primary"
            onClick={() => {
              this.handleCreateGame(this.state.value, this.state.countDown);
            }}
            name="Créer la partie"
          />
        </div>
      </div>
    );
  }
}

// function mapStateToProps({ Popup }) {
//   return { isOpen: Popup.isOpen, content: Popup.content };
// }

export default connect(() => ({}))(CreateGame);
