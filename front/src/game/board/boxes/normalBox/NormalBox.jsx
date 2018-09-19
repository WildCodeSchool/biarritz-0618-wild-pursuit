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
          backgroundColor: "#C0C0C0",
          border: "1px solid #C0C0C0",
          transform
        }}
      >
        {id}
      </div>
    );
  }
}
