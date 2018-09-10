import React, { Component } from "react";
import Button from "./../../../commun/button/Button.jsx";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Stats extends Component {
  constructor() {
    super();
    this.handleClosePopup = this.handleClosePopup.bind(this);
  }
  handleClosePopup() {
    this.props.dispatch({ type: "@popup/CLOSE" });
  }
  render() {
    return (
      <div>
        <h1>
          Voici quelques statistiques de la partie que vous venez de jouer
        </h1>
        <p>Durée totale : "DUREE DE LA PARTIE"</p>
        <div>
          <Link to="/">
            <Button
              onClick={() => {
                this.handleClosePopup();
              }}
              name="Revenir au Lobby"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(() => ({}))(Stats);
