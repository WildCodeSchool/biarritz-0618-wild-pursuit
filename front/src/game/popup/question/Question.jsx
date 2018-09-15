import React, { Component } from "react";
import { connect } from "react-redux";

import { question, aCase } from "./../../../App.dummyDatas.js";

import CountDown from "./../../countDown/CountDown.jsx";
import List from "./../../../commun/list/List.jsx";
import Button from "./../../../commun/button/Button.jsx";
import CheeseWin from "./../cheeseWin/CheeseWin.jsx";

import "./Question.css";

class Question extends Component {
  constructor() {
    super();
    this.question = question; //TODO Récupérer la question du backend
    this.case = aCase; //TODO Récupérer la case sur lequel est le pion du backend
    this.answers = [];
    this.state = {
      color: "default",
      theAnswerClicked: undefined,
      disabled: false
    };
    this.answerQuestion = this.answerQuestion.bind(this);
  }
  answerQuestion(answer) {
    //Là on balance la requete socket.io avec la réponse qui a été cliquée
    //On écoute la réponse de socket.io
    //On teste si la réponse est true/false
    this.setState({ theAnswerClicked: answer, disabled: true });

    setTimeout(() => {
      if (this.case.cheese && this.question.correctAnswer === answer) {
        this.props.dispatch({
          type: "@popup/CHANGE",
          payload: {
            content: (
              <CheeseWin
                color={this.case.couleur}
                theme={this.question.theme}
              />
            )
          }
        });
      } else {
        this.props.dispatch({
          type: "@popup/CLOSE"
        });
      }
    }, 2200);
  }
  getColor(answer) {
    if (this.state.theAnswerClicked === answer) {
      if (answer === this.question.correctAnswer) {
        return "secondary";
      } else {
        return "primary";
      }
    }
    return "default";
  }
  render() {
    let displayCatCheese = `Une question de la catégorie ${
      this.case.couleur
    } : ${this.question.theme}`;
    if (this.case.cheese) {
      displayCatCheese += " pour un Camembert !";
    }

    let theButtons = this.question.answers.map((answer, i) => {
      let onCl = "";
      if (!this.state.disabled) {
        onCl = event => {
          this.answerQuestion(answer);
        };
      }
      return (
        <Button
          name={answer}
          color={this.getColor(answer)}
          onClick={onCl}
          disableRipple={this.state.disabled}
        />
      );
    });
    return (
      <div id="containQuestion">
        <CountDown id="countDownToQuestion" seconds={15} />
        <h1>A vous de jouer !</h1>
        <h2>{displayCatCheese}</h2>
        <p id="pQuest">{this.question.question}</p>
        <List items={theButtons} />
      </div>
    );
  }
}
export default connect(() => ({}))(Question);
