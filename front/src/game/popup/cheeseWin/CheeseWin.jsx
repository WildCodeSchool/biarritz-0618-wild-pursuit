import React, { Component } from "react";
import Button from "./../../../commun/button/Button.jsx";
import { connect } from "react-redux";
import "./cheeseWin.css";

class CheeseWin extends Component {
  render() {
    return (
      <div>
        <h1>Félicitations !!</h1>
        <p id="cheese">
          Vous venez de Gagner une Part de Camembert {this.props.color} pour la
          catégorie People
        </p>
        <div id="button">
          <Button
            onClick={() => {
              this.props.dispatch({ type: "@popup/CLOSE" });
            }}
            name="Rejouer"
          />
        </div>
      </div>
    );
  }
}

export default connect(() => ({}))(CheeseWin);
