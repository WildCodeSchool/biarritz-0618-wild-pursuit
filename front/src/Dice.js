import React from "react";
import "./Dice.css";
//import "./../../../back/src/De/de.controller";
import ReactDice from "react-dice-complete";

export default class Dice extends React.Component {
  render() {
    return (
      <div>
        <div>
          <ReactDice
           
            numDice={1}
            //rollDoneCallback = '4'
            rollDone = {this.rollDoneCallback}
            
            ref={dice => (this.reactDice = dice)}
            faceColor = '#ff4000'
            dotColor = '#ffffff'
            dieSize = {60}
           
          />
        </div>
           
         
        
      </div>
    );
  }
  
    rollAll() {this.reactDice.rollAll()};
        rollDoneCallback(){
          
          }
        }

