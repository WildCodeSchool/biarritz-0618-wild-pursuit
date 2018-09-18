import React, { Component } from "react";
import "./Dice.css";

class Dice extends Component {
  constructor(props) {
    super();
    let results = Math.ceil(Math.random() * 6);
    this.state = { ...props, results };
    this.lancerDe = this.lancerDe.bind(this);
  }
  componentDidMount() {
    this.lancerDe();
  }

  lancerDe() {
    let results = [];
    for (let i = 0; i < Math.random() * 5 + 5; i++) {
      results.push(Math.ceil(Math.random() * 6));
    }
    results.push(this.state.result);
    let interval = 100;
    let i = 0;
    setTimeout(() => {
      anim(this);
    }, interval);

    function anim(objet) {
      objet.setState({ results: results[i] });
      i++;
      if (i !== results.length) {
        interval = interval * 1.1;
        setTimeout(() => {
          anim(objet);
        }, interval);
      }
    }
  }
  render() {
    return (
      <div className="dice" onClick={this.lancerDe}>
        <div id="result">{this.state.results}</div>
      </div>
    );
  }
}

export default Dice;
