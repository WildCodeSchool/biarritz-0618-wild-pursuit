<<<<<<< HEAD
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './Button.jsx';
//import De from './De.jsx'
//import React from 'react'
import ReactDOM from 'react-dom'
//import { AppContainer } from 'react-hot-loader';
=======
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import List from "./List";
import Plateau from "./Plateau";
import Ranking from "./ranking/Ranking.jsx";
>>>>>>> 336ecb5d6f0e1d64b8fef22c293799d2c39afbe8

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
      <Button />
=======
      <div className="App">
        <h1>Wild Pursuit</h1>
        <h2>A la recherche de la quête perdue</h2>
        <div>
          <List />
        </div>

        <div>
          <Plateau />
        </div>
        <Ranking />
>>>>>>> 336ecb5d6f0e1d64b8fef22c293799d2c39afbe8
      </div>
    );
  }
  
  
}
<<<<<<< HEAD
const render = (Component) => {
  ReactDOM.render(
    //<AppContainer>
      <Component/>,
    //</AppContainer>
    
    document.getElementById('App')
  );
};

render();


// Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./TestApp', () => {
//     const NextApp = require('./TestApp');
//     render(NextApp)
//   });
// }


export default App;
=======
>>>>>>> 336ecb5d6f0e1d64b8fef22c293799d2c39afbe8
