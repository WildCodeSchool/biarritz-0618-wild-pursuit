import React, { Component } from "react";
import Slider from "@material-ui/lab/Slider";
import Switch from "@material-ui/core/Switch";
import { connect } from "react-redux";

import Button from "./../../../commun/button/Button.jsx";
import WaitingForPlayers from "./../waitingForPlayers/WaitingForPlayers.jsx";

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
        default:
          this.setState({ countDown: 10 });
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
              width={150}
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
