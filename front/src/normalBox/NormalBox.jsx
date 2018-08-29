import React, { Component } from "react";

export default class NormalBox extends Component {
    constructor (props){
        super();
		this.state = {...props.objet}
        };

    
    render() {
      return (
        <div> NormalBox
          {this.state.id}
          </div>
          );
        }
    }
