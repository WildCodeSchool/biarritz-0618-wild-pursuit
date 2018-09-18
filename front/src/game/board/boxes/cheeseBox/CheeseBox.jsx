import React, { Component } from "react";

export default class CheeseBox extends Component {
  constructor(props) {
    super();
    this.state = { ...props.cheeseObjet };
  }

  render() {
    const { coord, id } = this.props;
    return (
      <div
        style={{
          //position: "absolute",
          //top: coord[1],
          //left: coord[0],
          border: "1px solid red"
        }}
      >
        {id}
      </div>
    );
  }
}
