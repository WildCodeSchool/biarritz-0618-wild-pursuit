import React, { Component } from "react";
import CreateButton from "./../../../commun/button/CreateButton.jsx";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Stats.css";

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
      <div id="contain">
        <h1>
          Voici quelques statistiques de la partie que vous venez de jouer
        </h1>
        <p>Durée totale : "DUREE DE LA PARTIE"</p>
        <div>
          <Link to="/">
            <CreateButton
              color="#76FF6B"
              bottom="5%"
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
