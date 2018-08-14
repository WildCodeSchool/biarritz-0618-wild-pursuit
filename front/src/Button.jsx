import React, { Component } from 'react';

export default class Button extends Component {
    constructor(){
      super();
      this.state = {
        name : 'test',
        action : 'tast',
      }
    }

    render(){
    return (
      <button className="Button" onClick={this.state.action}>
        {this.state.name}
      </button>
    );
  }
}
