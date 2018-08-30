import React, { Component } from "react";

export default class ReplayBox extends Component {
    constructor (props){
        super();
		this.state = {...props.replayObjet}
        };

    
    render() {
      return (
        <div> ReplayBox
          {this.state.id}
          </div>
          );
        }
    }
