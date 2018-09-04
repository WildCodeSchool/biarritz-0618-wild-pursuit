import React, { Component } from "react";
import Button from "./../../atomes/button/Button.jsx";
import List from "./../../atomes/list/List.jsx";
import "./social.css";

class Social extends Component {
  constructor() {
    super();

    this._TxtInteractions = [
      <Button
        onClick={() => {
          alert("#todo : afficher le texte");
        }}
        name="Bravo !"
      />,
      <Button
        onClick={() => {
          alert("#todo : afficher le texte");
        }}
        name="Dommage..."
      />,
      <Button
        onClick={() => {
          alert("#todo : afficher le texte");
        }}
        name="Bien joué !"
      />,
      <Button
        onClick={() => {
          alert("#todo : afficher le texte");
        }}
        name="AHAH"
      />
    ];
    this._emoInteractions = [
      <Button
        onClick={() => {
          alert("#todo : afficher le smile");
        }}
        name="🙂"
        variant="fab"
      />,
      <Button
        onClick={() => {
          alert("#todo : afficher le smile");
        }}
        name="❤️"
        variant="fab"
      />,

      <Button
        onClick={() => {
          alert("#todo : afficher le smile");
        }}
        name="😉"
        variant="fab"
      />,

      <Button
        onClick={() => {
          alert("#todo : afficher le smile");
        }}
        name="😀"
        variant="fab"
      />,

      <Button
        onClick={() => {
          alert("#todo : afficher le smile");
        }}
        name="☹️"
        variant="fab"
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
