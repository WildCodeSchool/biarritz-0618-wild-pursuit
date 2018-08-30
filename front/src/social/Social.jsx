import React, { Component } from "react";
import Button from "./../button/Button.jsx";
import List from "./../list/List.jsx";

class Social extends Component {
  constructor() {
    super();

    this._TxtInteractions = [
      <Button
        action={() => {
          alert("#todo : afficher le texte");
        }}
        name="Bravo !"
      />,
      <Button
        action={() => {
          alert("#todo : afficher le texte");
        }}
        name="Dommage..."
      />,
      <Button
        action={() => {
          alert("#todo : afficher le texte");
        }}
        name="Bien joué !"
      />,
      <Button
        action={() => {
          alert("#todo : afficher le texte");
        }}
        name="AHAH"
      />
    ];
    this._emoInteractions = [
      <Button
        action={() => {
          alert("#todo : afficher le smile");
        }}
        name="🙂"
        variant="fab"
      />,
      <Button
        action={() => {
          alert("#todo : afficher le smile");
        }}
        name="❤️"
        variant="fab"
      />,
      <Button
        action={() => {
          alert("#todo : afficher le smile");
        }}
        name="😉"
        variant="fab"
      />,
      <Button
        action={() => {
          alert("#todo : afficher le smile");
        }}
        name="😀"
        variant="fab"
      />,
      <Button
        action={() => {
          alert("#todo : afficher le smile");
        }}
        name="☹️"
        variant="fab"
      />
    ];
  }

  render() {
    return (
      <div>
        <List items={this._TxtInteractions} />
        <List items={this._emoInteractions} />
      </div>
    );
  }
}

export default Social;
