import React, { Component } from "react";

export default class CheeseBox extends Component {
  constructor(props) {
    super();
    this.state = { ...props.cheeseObjet };
  }

  render() {
    const { coord, id, size, transform } = this.props;
    return (
      <div
        style={{
          position: "absolute",
          top: coord[1],
          left: coord[0],
          width: size,
          height: size,
          backgroundColor: "#ffa64d",
          border: "1px solid #ffa64d",
          transform
        }}
      >
        {id}
      </div>
    );
  }
}
