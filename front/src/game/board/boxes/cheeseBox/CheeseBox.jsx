import React, { Component } from "react";

export default class CheeseBox extends Component {
    constructor (props){
        super();
		this.state = {...props.cheeseObjet}
        };

    
    render() {
      return (
        <div> CheeseBox
          {this.state.id}
          </div>
          );
        }
    }
