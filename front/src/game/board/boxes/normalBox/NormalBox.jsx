import React, { Component } from "react";

export default class NormalBox extends Component {
  constructor(props) {
    super();
    this.state = { ...props.objet };
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
          border: "1px solid black",
          transform
        }}
      >
        {id}
      </div>
    );
  }
}
