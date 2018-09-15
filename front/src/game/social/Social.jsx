import React, { Component } from "react";
import Button from "./../../commun/button/Button.jsx";
import GameButton from "./../../commun/button/GameButton.jsx";
import SmileButton from "./../../commun/button/SmileButton.jsx";
import List from "./../../commun/list/List.jsx";
import "./social.css";

class Social extends Component {
  constructor() {
    super();

    this._TxtInteractions = [
      <GameButton
        onClick={() => {
          alert("#todo : afficher le texte");
        }}
        name="Bravo !"
      />,
      <GameButton
        onClick={() => {
          alert("#todo : afficher le texte");
        }}
        name="Dommage..."
      />,
      <GameButton
        onClick={() => {
          alert("#todo : afficher le texte");
        }}
        name="Bien joué !"
      />,
      <GameButton
        onClick={() => {
          alert("#todo : afficher le texte");
        }}
        name="AHAH"
      />
    ];
    this._emoInteractions = [
      <SmileButton
        onClick={() => {
          alert("#todo : afficher le smile");
        }}
        name="🙂"
      />,
      <SmileButton
        onClick={() => {
          alert("#todo : afficher le smile");
        }}
        name="❤️"
      />,
      <SmileButton
        onClick={() => {
          alert("#todo : afficher le smile");
        }}
        name="😉"
      />,
      <SmileButton
        onClick={() => {
          alert("#todo : afficher le smile");
        }}
        name="😀"
      />,
      <SmileButton
        onClick={() => {
          alert("#todo : afficher le smile");
        }}
        name="☹️"
      />
    ];
  }

  render() {
    return (
      <div id="container">
        <div id="word">
          <List items={this._TxtInteractions} />
        </div>
        <div id="icon">
          <br />
          <List items={this._emoInteractions} />
        </div>
      </div>
    );
  }
}

export default Social;
