import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CountDown from "./../../countDown/CountDown.jsx";

class CountDownToGame extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "@countdown/START"
    });
  }
  ///// TROUVER COMMENT LIRE L'ETAT DU STORE ET COMMENT METTRE A JOUR LE COMPOSANT AUX CHANGEMENT DU STORE
  //this.props.dispatch(closePopup());

  render() {
    return (
      <div className="CountDownToGame">
        <h1>La Partie commence dans</h1>
        <CountDown seconds={this.props.countDown} />
      </div>
    );
  }
}

CountDownToGame.propTypes = {
  countDown: PropTypes.number.isRequired
};

//export default CountDownToGame;

export default connect(() => ({}))(CountDownToGame);
