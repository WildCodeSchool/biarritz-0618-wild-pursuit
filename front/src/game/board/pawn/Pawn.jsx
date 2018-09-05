import React, { Component } from "react";

export default class Pawn extends Component {
  constructor(props) {
    super();
    this.state = { ...props.centerObjet };
  }

  render() {
    return <div>Un Pion</div>;
  }
}
