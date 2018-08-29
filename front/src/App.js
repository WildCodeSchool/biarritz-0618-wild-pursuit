import React, { Component } from "react";
import "./App.css";

import Ranking from "./ranking/Ranking.jsx";
import Social from "./social/Social.jsx";
import Dice from "./dice/Dice.jsx";
import CountDown from "./countDown/CountDown.jsx";
import Plateau from "./Plateau.jsx";
import CreateGame from "./createGame/CreateGame.jsx";
import Lobby from "./Lobby.jsx";
import CountDownToGame from "./countDownToGame/CountDownToGame.jsx";
import WaitingForPlayers from "./waitingForPlayers/WaitingForPlayers.jsx";
import Question from "./question/Question.jsx";
import Popup from "./popup/Popup.jsx";
import StopGame from "./stopGame/StopGame.jsx";
import NameWinner from './nameWinner/NameWinner.jsx';
import NormalBox from './normalBox/NormalBox.jsx';
import CheeseBox from './cheeseBox/CheeseBox.jsx';
import ReplayBox from './replayBox/ReplayBox.jsx';
import CenterBox from './centerBox/CenterBox.jsx';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Dice result={3} />
        <h1>Wild Pursuit</h1>
        <h2>A la recherche de la quête perdue</h2>
        <Lobby />
        <Ranking />
        <Social />
        <Plateau />
        <Popup comp={<CreateGame />} />
        <Popup comp={<CountDownToGame countDown={10} />} />
        <Popup comp={<WaitingForPlayers maxPLayers={8} />} />
        <Popup comp={<Question />} />
        <Popup comp={<StopGame />} />
		<Popup comp={<NameWinner />} />
		<NormalBox objet={ {id: 27, coord : [78,67], categorie : {nom :'Géographie',couleur : {nom : 'Rouge', code :'#FF0000'}}}}/>
		<CheeseBox cheeseObjet={ {id: 34, coord : [11,30], categorie : {nom :'Histoire',couleur : {nom : 'Noir', code :'#FFFFFF'}}}}/>
		<ReplayBox replayObjet={ {id: 22, coord : [14,71], categorie : {nom :'Loisir',couleur : {nom : 'Rose', code :'#FFFFFF'}}}}/>
		<CenterBox centerObjet={ {id: 82, coord : [0,0], categorie : {nom :'Loisir',couleur : {nom : 'Bleu', code :'#FFFFFF'}}}}/>
      </div>
    );
  }
}

export default App;
