import React, { Component } from "react";

export default class CenterBox extends Component {
    constructor (props){
        super();
		this.state = {...props.centerObjet}
        };

    
    render() {
      return (
        <div> CenterBox
          {this.state.id}
          <img src={require('.././images/logoWP.png')}  width = "100" height = "70" />
          </div>
          );
        }
    }
