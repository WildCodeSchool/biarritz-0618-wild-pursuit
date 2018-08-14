import React, { Component } from "react";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      items: ["Test", "Tast", "Tist"]
    };
  }

  render() {
    return this.state.items.map(item => {
      return <div key={item}>{item}</div>;
    });
  }
}
