
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './Button.jsx';
import Die from './Die.js'
//import React from 'react'
import Ranking from './ranking/Ranking.jsx'

//import { AppContainer } from 'react-hot-loader';

export default class App extends Component {
  render() {
    return (<div>
      <div>
      <Button />
      </div>
      <div className="App">
        <h1>Wild Pursuit</h1>
        <h2>A la recherche de la quête perdue</h2>
        <Ranking />
      </div>
      <div>
        <Die />
        </div>
        </div>)
  
}
}
