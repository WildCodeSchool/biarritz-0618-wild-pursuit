import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './Button.jsx';
//import De from './De.jsx'
//import React from 'react'
import ReactDOM from 'react-dom'
//import { AppContainer } from 'react-hot-loader';

class App extends Component {
  render() {
    return (
      <div>
      <Button />
      </div>
    );
  }
  
  
}
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
